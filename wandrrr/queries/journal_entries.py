from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool



class PostIn(BaseModel):
    title: str
    start_date: date
    end_date: date
    location: str
    description: Optional[str]
    mood: Optional[str]
    companion: Optional[str]
    companion_dropdown: Optional[str]
    weather: Optional[str]
    photos01: str
    photos02: Optional[str]
    photos03: Optional[str]
    photos04: Optional[str]
    photos05: Optional[str]
    timestamp: date
    rating: int

class PostOut(BaseModel):
    wandrrrs_id: int
    title: str
    start_date: date
    end_date: date
    location: str
    description: Optional[str]
    mood: Optional[str]
    companion: Optional[str]
    companion_dropdown: Optional[str]
    weather: Optional[str]
    photos01: str
    photos02: Optional[str]
    photos03: Optional[str]
    photos04: Optional[str]
    photos05: Optional[str]
    timestamp: date
    rating: int

class WandrrrRepository:
    def get_all():
        pass
    def get_one():
        pass
    def delete():
        pass
    def create():
        pass
    def update():
        pass
    def wandrrr_in_to_out():
        pass
    def record_to_wandrrr_out():
        pass
