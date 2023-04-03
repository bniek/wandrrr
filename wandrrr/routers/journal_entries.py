from fastapi import APIRouter, Depends, Response
from queries.journal_entries import PostIn, PostOut, WandrrrRepository
from typing import List, Optional, Union
from auth import authenticator

router = APIRouter()

# def check_user(data: UserLogin):
#     for user in username:
#         if user.email == data.email and user.password == data.password:
#             return True
#     return False



@router.get("/wandrrrs/", tags=["post"])
def get_list():
      return{
            "data": post
      }

@router.get("/wandrrrs/{wandrrrs_id}", response_model=Optional[PostOut], )
def get_post(
     wandrrrs_id : int,
     response: Response,
     repo: WandrrrRepository = Depends(),
) -> PostOut:
    wandrrr_post = repo.get_one(wandrrrs_id)
    if wandrrr_post is None:
        response.status_code = 404
    return wandrrr_post




@router.put("/wandrrrs/{id}")
def edit_post(id : int):
    return()

@router.delete("/wandrrrs/{id}")
def delete_post(id : int):
    return()

@router.post("/wandrrrs/", )
def create_post():
    return()
