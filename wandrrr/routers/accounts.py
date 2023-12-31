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
from authenticator import authenticator
from pydantic import BaseModel
from typing import List, Union


from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountRepo,
    DuplicateAccountError,
)

from queries.journal_entries import (
    Error,
    PostOut,
    WandrrrRepository,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("/wandrrrs/protected", response_model=Union[List[PostOut], Error])
async def get_protected(
    wandrrrs: WandrrrRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    owner_id = account_data['id']
    return wandrrrs.get_all(owner_id=owner_id)


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"}
)


@router.get("/wandrrr/user/{id}")
def get_user(
    id: int,
    repo: AccountRepo = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> AccountOut:
    # Check if the user is logged in
    if not account_data:
        raise HTTPException(status_code=401, detail="Not authenticated")

    # Check if the user is requesting their own account details
    if account_data["id"] != id:
        raise HTTPException(status_code=403, detail="Forbidden")

    # Get the account details from the repository
    account = repo.get_user_by_id(id=id)

    if not account:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, detail="Account does not exist"
        )

    return account


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
