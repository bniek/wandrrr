from fastapi.testclient import TestClient
from main import app
from queries.journal_entries import WandrrrRepository, PostOut
from authenticator import authenticator


client = TestClient(app)


class GetOne(WandrrrRepository):
    def get_one(self, wandrrrs_id: int) -> PostOut:
        if wandrrrs_id == 1:
            return PostOut(**test_wandrrrs)
        else:
            return None


test_wandrrrs = {
    "wandrrrs_id": 1,
    "owner_id": 1,
    "title": "string",
    "start_date": "2023-04-26",
    "end_date": "2023-04-26",
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
    "rating": "string",
}

test_account = {
    "id": 0,
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "password": "string",
}


def account_override():
    test_account["id"] = 1
    return test_account


def test_get_one_post():
    app.dependency_overrides[WandrrrRepository] = GetOne
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override

    response = client.get("wandrrrs/1")
    data = response.json()
    if response.status_code == 404:
        assert data["detail"] == "Post not found"
    else:
        assert response.status_code == 200
        assert data == {
            "wandrrrs_id": 1,
            "owner_id": 1,
            "title": "string",
            "start_date": "2023-04-26",
            "end_date": "2023-04-26",
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
            "rating": "string",
        }

    app.dependency_overrides = {}
