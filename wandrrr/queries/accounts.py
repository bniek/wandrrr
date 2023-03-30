from pydantic import BaseModel, EmailStr
from queries.pool import pool

class CreateUser(BaseModel):
    fullname: str
    email : EmailStr
    password : str

class UserLogin(BaseModel):
    email : EmailStr
    password : str
