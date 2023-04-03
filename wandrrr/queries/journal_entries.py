from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str

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
    def get_all(self) -> Union[Error, List[PostOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            wandrrrs_id,
                            title,
                            start_date,
                            end_date,
                            location,
                            description,
                            mood,
                            companion,
                            companion_dropdown,
                            weather,
                            photos01,
                            photos02,
                            photos03,
                            photos04,
                            photos05,
                            timestamp,
                            rating
                        FROM wandrrrs
                        ORDER BY timestamp;
                        """
                    )
                    return [
                        self.record_to_wandrrr_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all wandrrrs"}

    def delete(self, wandrrr_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM wandrrrs
                        WHERE wandrrrs_id = %s
                        """,
                        [wandrrr_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def create():
        pass

    def update(self, wandrrr_id: int, post: PostIn) -> Union[PostOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE wandrrrs
                        SET title = %s,
                            start_date = %s,
                            end_date = %s,
                            location = %s,
                            description = %s,
                            mood = %s,
                            companion = %s,
                            companion_dropdown = %s,
                            weather = %s,
                            photos01 = %s,
                            photos02 = %s,
                            photos03 = %s,
                            photos04 = %s,
                            photos05 = %s,
                            timestamp = %s,
                            rating = %s
                        WHERE wandrrrs_id = %s
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
                            post.rating,
                            wandrrr_id
                        ]
                    )
                    return self.wandrrr_in_to_out(wandrrr_id, post)
        except Exception as e:
            print(e)
            return {"message": "Could not update that post"}

    def wandrrr_in_to_out(self, id: int, post: PostIn):
        old_data = post.dict()
        return PostOut(wandrrrs_id=id, **old_data)

    def record_to_wandrrr_out(self, record):
        return PostOut(
            wandrrrs_id=record[0],
            title=record[1],
            start_date=record[2],
            end_date=record[3],
            location=record[4],
            description=record[5],
            mood=record[6],
            companion=record[7],
            companion_dropdown=record[8],
            weather=record[9],
            photos01=record[10],
            photos02=record[11],
            photos03=record[12],
            photos04=record[13],
            photos05=record[14],
            timestamp=record[15],
            rating=record[16],
        )
