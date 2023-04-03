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
    def get_one(self, wandrrrs_id: int) -> Optional[PostOut]:
        try:
            # connect the database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT wandrrrs_id
                            , title
                            , start_date
                            , end_date
                            , location
                            , description
                            , mood
                            , companion
                            , companion_dropdown
                            , weather
                            , photos01
                            , photos02
                            , photos03
                            , photos04
                            , photos05
                            , timestamp
                            , rating
                        FROM wandrrrs
                        WHERE wandrrrs_id = %s
                        """,
                        [wandrrrs_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_wandrrr_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that wandrrr"}


    def delete():
        pass
    def create():
        pass
    def update():
        pass
    def wandrrr_in_to_out():
        pass
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
            rating=record[16]
        )
