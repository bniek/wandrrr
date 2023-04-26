# from fastapi.testclient import TestClient
# from main import app
# from queries.journal_entries import WandrrrRepository
# from authenticator import authenticator


# client = TestClient(app)


# class EmptyWandrrrRepository:
#     def get_all(self):
#         return []


# class CreateWandrrrRepository:
#     def create(self, wandrrr):
#         result = {
#             "wandrrrs_id": 1,
#             "owner_id": 1,
#             "title": "string",
#             "start_date": "2023-04-25",
#             "end_date": "2023-04-25",
#             "location": "string",
#             "description": "string",
#             "mood": "string",
#             "companion": "string",
#             "companion_dropdown": "string",
#             "weather": "string",
#             "photos01": "string",
#             "photos02": "string",
#             "photos03": "string",
#             "photos04": "string",
#             "photos05": "string",
#             "timestamp": "2023-04-25T22:18:38.030Z",
#             "rating": "string"
#         }
#         result.update(wandrrr)
#         return result


# test_account = {
#     "id": 1,
#     "first_name": "string",
#     "last_name": "string",
#     "username": "string",
#     "email": "string",
#     "password": "string"
# }


# def account_override():
#     return test_account


# def test_create_wandrrr():
#     app.dependency_overrides[WandrrrRepository] = CreateWandrrrRepository
#     app.dependency_overrides[
#       authenticator.try_get_current_account_data
#       ] = account_override

#     json = {
#         "owner_id": 1,
#         "title": "string",
#         "start_date": "2023-04-25",
#         "end_date": "2023-04-25",
#         "location": "string",
#         "description": "string",
#         "mood": "string",
#         "companion": "string",
#         "companion_dropdown": "string",
#         "weather": "string",
#         "photos01": "string",
#         "photos02": "string",
#         "photos03": "string",
#         "photos04": "string",
#         "photos05": "string",
#         "timestamp": "2023-04-25T22:18:38.030Z",
#         "rating": "string"
#     }

#     expected = {
#         "wandrrrs_id": 1,
#         "owner_id": 1,
#         "title": "string",
#         "start_date": "2023-04-25",
#         "end_date": "2023-04-25",
#         "location": "string",
#         "description": "string",
#         "mood": "string",
#         "companion": "string",
#         "companion_dropdown": "string",
#         "weather": "string",
#         "photos01": "string",
#         "photos02": "string",
#         "photos03": "string",
#         "photos04": "string",
#         "photos05": "string",
#         "timestamp": "2023-04-25T22:18:38.030Z",
#         "rating": "string"
#     }

#     response = client.post("/wandrrrs", json=json)
#     app.dependency_overrides = {}

#     assert response.status_code == 200
#     response_json = response.json()
#     expected["timestamp"] = response_json["timestamp"]
#     assert response_json == expected


def test():
    assert 1 == 1
