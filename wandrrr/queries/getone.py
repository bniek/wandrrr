from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
#from queries.pool import pool



class PostIn(BaseModel):
    title: str
    start_date: date
    end_date: date
    location: str
    description: Optional[str]
    companion: Optional[str]
    mood: Optional[str]
    weather: Optional[str]


class PostOut(BaseModel):
    id : int
    title: str
    start_date: date
    end_date: date
    location: str
    description: Optional[str]
    companion: Optional[str]
    mood: Optional[str]
    weather: Optional[str]


class PostQueryGetOne:
    def get_one(self, vacation_id: int) -> Optional[PostOut]:
        try:
            # connect the database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT id
                             , name
                             , from_date
                             , to_date
                             , thoughts
                        FROM vacations
                        WHERE id = %s
                        """,
                        [vacation_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_vacation_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that vacation"}
