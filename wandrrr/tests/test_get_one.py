from fastapi.testclient import TestClient
from main import app
from queries.journal_entries import WandrrrRepository
from authenticator import authenticator


client = TestClient(app)


class GetOne:
    def get_one(self, wandrrrs_id: int):
        if wandrrrs_id == 1:
            return test_wandrrrs
        else:
            return None


test_wandrrrs = {
    "wandrrrs_id": 1,
    "owner_id": 1,
    "title": "string",
    "start_date": "date",
    "end_date": "date",
    "location": "string",
    "description": "string",
    "mood": "string",
    "companion": "string",
    "companion_dropdown": "string",
    "weather": "string",
    "photos01": "string",
    "photos02": "string",
    "photos03": "string",
    "photos04": "string",
    "photos05": "string",
    "datestamp": "date",
}


def accounts_override():
    return test_wandrrrs


def test_get_one_post():
    app.dependency_overrides[WandrrrRepository] = GetOne
    app.dependency_overrides[
        authenticator.try_get_current_account_data  # or whichever authenticator method you're using in your endpoint
    ] = accounts_override


def test_wandrrrs_post():
    test_get_one_post()

    wandrrrs_id = 1
    response = client.get(f"/wandrrrs/{wandrrrs_id}")
    assert response.status_code == 200
    assert response.json() == test_wandrrrs


# def test_init():
#     assert 1 == 1
