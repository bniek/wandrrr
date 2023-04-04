# from queries.sessions import SessionQueries
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from auth.authenticator import authenticator
from pydantic import BaseModel

from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountRepo,
    DuplicateAccountError,
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate":"Bearer"}
)

@router.get("wandrrr/user/{id}")
def get_user(
    id: int,
    accounts: AccountRepo = Depends(),
    ra=Depends(authenticator.get_account_data),
)-> AccountOut:
    account = accounts.get_user_by_id(username=id)
    if not account:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, detail = "Account does not exist"
        )
    else:
        return account

@router.get("/token")
async def get_token(
    request: Request,
    account_data : dict
    | None = Depends(authenticator.get_account_data),
     accounts: AccountRepo = Depends(),
     ra=Depends(authenticator.get_account_data),
 )-> AccountToken:
    account = await get_user(account_data["id"], accounts=accounts, ra=ra)
    return {
        "access_token": request.cookies[authenticator.cookie_name],
        "type": "Bearer",
        "account": account,
    }


@router.post("/wandrrrs/accounts")
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountRepo = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.CreateUser(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())
