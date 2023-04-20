from fastapi import FastAPI
from auth import authenticator
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts, journal_entries

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(journal_entries.router)


origins = [
    os.environ.get("CORS_HOST"),
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
