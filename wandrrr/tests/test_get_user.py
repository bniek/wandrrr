from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountRepo, AccountOut
from authenticator import authenticator
from fastapi.exceptions import HTTPException


client = TestClient(app)


def test_get_current_account_data():
    assert {
        "id": 0,
        "username": "string"
    }


class EmptyAccountRepo:
    def get_user_by_id(self, id: int) -> AccountOut:
        if id == 0:
            return AccountOut(
                id=0,
                first_name="string",
                last_name="string",
                email="string",
                username="string",
                password="string"
            )
        else:
            raise HTTPException(status_code=404, detail="Not Found")


test_account = {
    "id": 1,
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "password": "string"
}


def test_get_user():
    app.dependency_overrides[AccountRepo] = EmptyAccountRepo
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = test_get_current_account_data

    response = client.get("/accounts/1")
    data = response.json()
    if response.status_code == 404:
        assert data["detail"] == "Not Found"
    else:
        assert response.status_code == 200
        assert data == {
            "id": 0,
            "first_name": "string",
            "last_name": "string",
            "username": "string",
            "email": "string",
            "password": "string"
        }

    app.dependency_overrides = {}
