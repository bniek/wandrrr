from typing import List, Optional, Union
from fastapi import APIRouter, Depends, Response, HTTPException
from datetime import date
from auth.authenticator import authenticator
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
     account_data: dict = Depends(
        authenticator.get_current_account_data
     ),
):
    if account_data is not None:
        owner_id = account_data["id"]
        return repo.get_all(owner_id)
    else:
        raise HTTPException(status_code=401, detail="You do not have the permission to view this")


@router.get("/wandrrrs/{wandrrrs_id}", response_model=Optional[PostOut], )
def get_post(
     wandrrrs_id : int,
     response: Response,
     repo: WandrrrRepository = Depends(),
     account_data: dict = Depends(authenticator.get_current_account_data),
) -> PostOut:
    wandrrr_post = repo.get_one(wandrrrs_id)
    if wandrrr_post is None:
        response.status_code = 404
        return None
    elif wandrrr_post.owner_id != account_data['id']:
        raise HTTPException(status_code=403, detail="You do not have the permission to view this")
    else:
        return wandrrr_post


@router.put("/wandrrrs/{wandrrrs_id}", response_model=Union[PostOut, Error])
def edit_post(
    wandrrrs_id : int,
    post: PostIn,
    repo: WandrrrRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> Union[Error, PostOut]:
    wandrrr_post = repo.get_one(wandrrrs_id)
    if wandrrr_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    elif wandrrr_post.owner_id != account_data['id']:
        raise HTTPException(status_code=403, detail="You do not have the permission to edit this")
    else:
        return repo.update(wandrrrs_id, post)


@router.delete("/wandrrrs/{wandrrrs_id}", response_model=bool)
def delete_post(
    wandrrrs_id : int,
    repo: WandrrrRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    wandrrr_post = repo.get_one(wandrrrs_id)
    if wandrrr_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    elif wandrrr_post.owner_id != account_data['id']:
        raise HTTPException(status_code=403, detail="You need to be the author to delete this post")
    else:
        return repo.delete(wandrrrs_id)

@router.post("/wandrrrs/")
def create_post(
    post: PostIn,
    repo: WandrrrRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if not account_data:
        raise HTTPException(status_code=401, detail="You need to be logged in to create a post")
    post.owner_id = account_data['id']
    return repo.create(post)
