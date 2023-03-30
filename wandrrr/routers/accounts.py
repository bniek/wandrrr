from queries.accounts import CreateUser,UserLogin
#from auth.auth_handler import signJWT
from fastapi import APIRouter, Body

router = APIRouter()



@router.post("/user/signup")
def create_user(user: CreateUser = Body(...)):
    return()

@router.post("/user/login")
def user_login(user: UserLogin = Body(...)):
    return()
