from fastapi.testclient import TestClient
from main import app
from queries.journal_entries import WandrrrRepository
from authenticator import authenticator


client = TestClient(app)

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


class TestWandrrrPosts:
    def get_one_post(self):
        return [test_wandrrrs]


def accounts_override():
    return {
        "id": 1,
        "email": "email@email.email",
        "username": "dummydata",
    }


def test_get_one_post():
    app.dependency_overrides[WandrrrRepository] = TestWandrrrPosts
    app.dependency_overrides[
        authenticator.try_get_current_account_data  # or whichever authenticator method you're using in your endpoint
    ] = accounts_override
    response = client.get("/wandrrrs/1")
    assert response.json() == {"wandrrrs": [test_wandrrrs]}
    assert response.status_code == 200
    app.dependency_overrides = {}


def test_init():
    assert 1 == 1
