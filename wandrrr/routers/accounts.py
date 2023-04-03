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
def create_account(
    info: AccountIn,
    accounts: AccountRepo = Depends(),
) ->AccountOut:
    hashed_password = authenticator.hash_password(info.password)
    ar = AccountIn(
        first_name=info.first_name,
        last_name=info.last_name,
        username=info.username,
        email=info.email,
        password=info.password,
        )
    try:
        id = accounts.CreateUser(ar, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Already exists, cannot create an account with those credentials",
        )
    return accounts.get_user_by_id(id)
