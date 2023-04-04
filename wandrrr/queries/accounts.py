from pydantic import BaseModel
from queries.pool import pool

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    email : str
    password : str

class AccountOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    username: str
    email : str
    hashed_password : str

class AccountRepo(BaseModel):
    def CreateUser(self, accounts: AccountIn, hashed_password: str)-> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO accounts
                        (first_name, last_name, username, email, hashed_password)
                    VALUES
                        (%s,%s,%s,%s,%s)
                    RETURNING id;
                    """,
                    (
                        accounts.first_name,
                        accounts.last_name,
                        accounts.username,
                        accounts.email,
                        hashed_password,
                    )

                )
                id = db.fetchone()[0]
                return self.account_in_to_out(id, accounts, hashed_password)

    def get_user_by_id(self, id: str) ->AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                        , first_name
                        , last_name
                        , username
                        , email
                        , hashed_password
                    FROM accounts
                    WHERE id = %s
                    """,
                    [id]
                )
                record = db.fetchone()

                try:
                    return AccountOut(
                        id=record[0],
                        first_name=record[1],
                        last_name=record[2],
                        username=record[3],
                        email=record[4],
                        hashed_password=record[5],
                    )
                except Exception as e:
                    raise Exception("Error", e)

    def get(self, username: str) -> AccountOut | None:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, first_name, last_name, username, email, hashed_password
                    FROM accounts
                    WHERE username =%s;
                    """,
                    [username]
                )
                record = db.fetchone()
                if record is None:
                    raise Exception("No account found")
                else:
                    try:
                        return AccountOut(
                            id=record[0],
                            first_name=record[1],
                            last_name=record[2],
                            username=record[3],
                            email=record[4],
                            hashed_password=record[5],
                        )
                    except Exception as e:
                        raise Exception("Error", e)

    def account_in_to_out(self, id: int, accounts: AccountIn, hashed_password: str):
        old_data = accounts.dict()
        return AccountOut(id=id, hashed_password=hashed_password, **old_data)
