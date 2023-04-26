from fastapi.testclient import TestClient
from main import app
from queries.journal_entries import WandrrrRepository
from authenticator import authenticator


client = TestClient(app)

class TestWandrrrQueries:
    def get_all(self, owner_id):
        return [all_wandrrrs_test]


all_wandrrrs_test = {
    "wandrrrs_id": 0,
    "owner_id": 0,
    "title": "string",
    "start_date": "2023-04-25",
    "end_date": "2023-04-25",
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
    "timestamp": "2023-04-25T23:45:10.873000+00:00",
    "rating": "string"
}

test_account = {
    "id": 0,
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "password": "string"
}

def account_override():
    return test_account

def test_get_all_wandrrrs():
    app.dependency_overrides[WandrrrRepository] = TestWandrrrQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override

    response = client.get("/wandrrrs")

    assert response.status_code == 200
    assert response.json() == [all_wandrrrs_test]

    app.dependency_overrides = {}
