from typing import List, Optional, Union
from fastapi import APIRouter, Depends, Response, HTTPException
from auth import authenticator
from queries.journal_entries import (
    Error,
    PostIn,
    PostOut,
    WandrrrRepository,
)

router = APIRouter()

# def check_user(data: UserLogin):
#     for user in username:
#         if user.email == data.email and user.password == data.password:
#             return True
#     return False



@router.get("/wandrrrs/", response_model=Union[List[PostOut], Error])
def get_all_posts(
     repo: WandrrrRepository = Depends(),
):
    return repo.get_all()

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


@router.put("/wandrrrs/{wandrrrs_id}", response_model=Union[PostOut, Error])
def edit_post(
    wandrrrs_id : int,
    post: PostIn,
    repo: WandrrrRepository = Depends(),
) -> Union[Error, PostOut]:
    return repo.update(wandrrrs_id, post)
    # existing_wandrrr = repo.get_one(wandrrrs_id)
    # if existing_wandrrr is None:
    #     raise HTTPException(status_code=404, detail="wandrrr not found")
    # else:
    #     return repo.update(wandrrrs_id, wandrrr)


@router.delete("/wandrrrs/{wandrrrs_id}", response_model=bool)
def delete_post(
    wandrrrs_id : int,
    repo: WandrrrRepository = Depends(),
) -> bool:
    return repo.delete(wandrrrs_id)

@router.post("/wandrrrs/")
def create_post(
    post: PostIn,
    repo: WandrrrRepository = Depends()
):
    return repo.create(post)
