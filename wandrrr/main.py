from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts, journal_entries

app = FastAPI()
app.include_router(accounts.router)
app.include_router(journal_entries.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get("/api/launch-details")
# def launch_details():
#     return {
#         "launch_details": {
#             "year": 2023,
#             "month": 5,
#             "day": "1",
#             "hour": 19,
#             "min": 0,
#             "tz:": "PST"
#         }
#     }
