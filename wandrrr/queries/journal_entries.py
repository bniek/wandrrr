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
    def create(self, post: PostIn) -> PostOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO wandrrrs
                        (title, start_date, end_date, location, description, mood, companion, companion_dropdown, weather, photos01, photos02, photos03, photos04, photos05, timestamp, rating)
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING wandrrrs_id;
                    """,
                    [
                        post.title,
                        post.start_date,
                        post.end_date,
                        post.location,
                        post.description,
                        post.mood,
                        post.companion,
                        post.companion_dropdown,
                        post.weather,
                        post.photos01,
                        post.photos02,
                        post.photos03,
                        post.photos04,
                        post.photos05,
                        post.timestamp,
                        post.rating
                    ]
                )
                id = result.fetchone()[0]
                old_data = post.dict()
                return PostOut(wandrrrs_id=id, **old_data)
    def update():
        pass
    def wandrrr_in_to_out():
        pass
    def record_to_wandrrr_out():
        pass
