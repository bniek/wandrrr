from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str

class PostIn(BaseModel):
    owner_id: int
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
    owner_id: int
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
    def get_all(self, owner_id: Optional[int] = None) -> Union[Error, List[PostOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    if owner_id is not None:
                        query = """
                            SELECT
                                wandrrrs_id,
                                owner_id,
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
                            WHERE owner_id = %s
                            ORDER BY timestamp;
                        """
                        result = db.execute(query, (owner_id,))
                    else:
                        query = """
                            SELECT
                                wandrrrs_id,
                                owner_id,
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
                        result = db.execute(query)

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



    def update(self, wandrrr_id: int, post: PostIn) -> Union[PostOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE wandrrrs
                        SET owner_id = %s,
                            title = %s,
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
                            post.owner_id,
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
            owner_id=record[1],
            title=record[2],
            start_date=record[3],
            end_date=record[4],
            location=record[5],
            description=record[6],
            mood=record[7],
            companion=record[8],
            companion_dropdown=record[9],
            weather=record[10],
            photos01=record[11],
            photos02=record[12],
            photos03=record[13],
            photos04=record[14],
            photos05=record[15],
            timestamp=record[16],
            rating=record[17],
        )

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
                            , owner_id
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


    def create(self, post: PostIn) -> PostOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO wandrrrs
                        (owner_id, title, start_date, end_date, location, description, mood, companion, companion_dropdown, weather, photos01, photos02, photos03, photos04, photos05, timestamp, rating)
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING wandrrrs_id;
                    """,
                    [   post.owner_id,
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
