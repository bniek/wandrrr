#from queries.journal_entries import
from fastapi import APIRouter, Depends, Response, HTTPException
from typing import List, Optional, Union
from auth.auth_bearer import JWTBearer
from queries.journal_entries import (
    Error,
    PostIn,
    PostOut,
    WandrrrRepository,
)

router = APIRouter()



@router.get("/wandrrrs/", response_model=Union[List[PostOut], Error])
def get_all_posts(
     repo: WandrrrRepository = Depends(),
):
    return repo.get_all()


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
