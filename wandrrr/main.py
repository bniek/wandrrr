from fastapi import FastAPI, Body, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
#from queries.getone import PostQueryGetOne
from queries.user import User,UserLogin
from auth.auth_bearer import JWTBearer
from auth.auth_handler import signJWT

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get("/api/launch-details")
# def launch_details():
#     return {
#         "launch_details": {
#             "year": 2022,
#             "month": 12,
#             "day": "9",
#             "hour": 19,
#             "min": 0,
#             "tz:": "PST"
#         }
#     }

post = [
    {
        "id": 1,
        "title": "title1",
        "location": "location1"
    },
    {
        "id": 2,
        "title": "title2",
        "location": "location2"
    }
]

users = [

]

app = FastAPI()

@app.get("/", tags=["test"])
def greet():
    return {"hello": "world!"}

@app.get("/posts/{id}", tags=["post"])
def get_one(id : int):

        return {
            "data": post
        }

@app.post("user/signup", tags=["user"])
def user_signup(user: UserLogin = Body(default=None)):
    users.append(user)
    return signJWT(user.email)

def check_user(data: UserLogin):
    for user in users:
        if user.email == data.email and user.password == data.password:
            return True
        return False

@app.post("/posts", dependencies=[Depends(JWTBearer())])
def add_post():
    return()


@app.post("/user/signup", tags=["user"])
def create_user(user: User = Body(...)):
    users.append(user) # replace with db call, making sure to hash the password first
    return signJWT(user.email)


@app.post("/user/login", tags=["user"])
def user_login(user: UserLogin = Body(...)):
    if check_user(user):
        return signJWT(user.email)
    else:
        return {
            "error": "Wrong login details!"
        }
