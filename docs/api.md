# APIs

## Overview

![SwaggerUI](images/SwaggerUI.png)

## Wandrrr Accounts

![Create Account](images/CreateAccount.png)
This action creates a user account on our Wandrrr app and stores it within the database
<br>
<br>
JSON Request Body:

`{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "email": "string",
  "password": "string"
}`

<br>
<br>
Returns (Status Code 200):

`{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": 2,
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "hashed_password": "string"
  }
}`
<br>
<br>
<br>

![Get User](images/GetUser.png)
This action gets the information of a user on the Wandrrr app
<br>
<br>
JSON Request Body:

`{
  "id": "2"
}`

<br>
<br>
Returns (Status Code 200):

`{
  "id": 2,
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "email": "string",
  "hashed_password": "string"
}`
<br>
<br>
<br>

![Get Token](images/GetToken.png)
This checks that we are able to get the token of the signed in user
<br>
<br>
JSON Request Body:

`{
}`

<br>
<br>
Returns (Status Code 200):

`{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": 2,
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "hashed_password": "string"
  }
}`
<br>
<br>
<br>

![Get Protected](images/GetProtected.png)
This ensures that only users who are logged in can do CRUD a Wandrrr. And only owners of the respective Wandrrr post can delete them.
<br>
<br>
JSON Request Body:

`{
}`

<br>
<br>
Returns (Status Code 200):

`[
  {
    "wandrrrs_id": 3,
    "owner_id": 2,
    "title": "string",
    "start_date": "2023-04-28",
    "end_date": "2023-04-28",
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
    "timestamp": "2023-04-28T01:29:01.841862+00:00",
    "rating": "string"
  }
]`

<br>
<br>
Else, Return Status Code 401: Unauthorized

`{
  "detail": "Invalid token"
}`
<br>
<br>
<br>

## Wandrrrs

![Create Wandrrr](images/CreatePost.png)
This action creates a Wandrrr post tied to an existing user and stores it within the database.
<br>
<br>
JSON Request Body:

`{
  "owner_id": 0,
  "title": "string",
  "start_date": "2023-04-28",
  "end_date": "2023-04-28",
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
  "timestamp": "2023-04-28T01:38:35.373Z",
  "rating": "string"
}`

<br>
<br>
Returns (Status Code 200):

`{
  "wandrrrs_id": 4,
  "owner_id": 1,
  "title": "string",
  "start_date": "2023-04-28",
  "end_date": "2023-04-28",
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
  "timestamp": "2023-04-28T01:38:35.373000+00:00",
  "rating": "string"
}`
<br>
<br>
<br>

![Get Wandrrr](images/GetPost.png)
This action allows the owner of the post to get details of one post
<br>
<br>
JSON Request Body:

`{
  "wandrrr_id": 2,
}`

<br>
<br>
Returns (Status Code 200):

`{
  "wandrrrs_id": 2,
  "owner_id": 1,
  "title": "32212",
  "start_date": "2023-04-11",
  "end_date": "2023-04-22",
  "location": "3r4234e3",
  "description": "wefrewrfewrf",
  "mood": "10",
  "companion": "",
  "companion_dropdown": "",
  "weather": "",
  "photos01": "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
  "photos02": "",
  "photos03": "",
  "photos04": "",
  "photos05": "",
  "timestamp": "2023-04-26T03:46:17.950536+00:00",
  "rating": ""
}`
<br>
<br>
Else, Error 403: Forbidden
`{
  "detail": "You do not have the permission to view this"
}`
<br>
<br>
<br>

![Get All Wandrrr](images/GetAllPosts.png)
This action allows the owner of the post to get a list of all the posts
<br>
<br>
JSON Request Body:

`{
}`

<br>
<br>
Returns (Status Code 200):

`[
  {
    "wandrrrs_id": 6,
    "owner_id": 1,
    "title": "12131231",
    "start_date": "2023-04-28",
    "end_date": "2023-04-28",
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
    "timestamp": "2023-04-28T01:51:58.044104+00:00",
    "rating": "string"
  },
  {
    "wandrrrs_id": 5,
    "owner_id": 1,
    "title": "string",
    "start_date": "2023-04-28",
    "end_date": "2023-04-28",
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
    "timestamp": "2023-04-28T01:51:43.443186+00:00",
    "rating": "string"
  }
]
`
<br>
<br>
<br>

![Edit Wandrrr](images/EditPost.png)
This action allows the owner of the post to edit details of one post
<br>
<br>
JSON Request Body:

`{
  "owner_id": 1,
  "title": "string",
  "start_date": "2023-04-28",
  "end_date": "2023-04-28",
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
  "timestamp": "2023-04-28T01:44:52.987Z",
  "rating": "string"
}`

<br>
<br>
Returns (Status Code 200):

`{
  "wandrrrs_id": 1,
  "owner_id": 1,
  "title": "string",
  "start_date": "2023-04-28",
  "end_date": "2023-04-28",
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
  "timestamp": "2023-04-28T01:44:52.987000+00:00",
  "rating": "string"
}`
<br>
<br>
Else, Error 403: Forbidden
`{
  "detail": "You do not have the permission to edit this"
}`
<br>
<br>
<br>

![Delete Wandrrr](images/DeletePost.png)
This action allows the owner of the post to delete their own post
<br>
<br>
JSON Request Body:

`{
  "wandrrr_id": 2,
}`

<br>
<br>
Returns (Status Code 200):

`true`
<br>
<br>
Else, Error 403: Forbidden
`{
  "detail": "You need to be the author to delete this post"
}`
<br>
<br>
<br>

## Authentication

![Login](images/Login.png)
This action requires user to login to the Wandrrr app
<br>
<br>
JSON Request Body:

`{
  "username": "string",
  "password": "string"
}`

<br>
<br>
Returns (Status Code 200):

`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZGFiNjUyNC04MGRiLTQ1MGYtYTk0Ny1jYjNiNTY5YWI1N2QiLCJleHAiOjE2ODI2NDgwMjcsInN1YiI6InN0cmluZyIsImFjY291bnQiOnsiaWQiOjIsImZpcnN0X25hbWUiOiJzdHJpbmciLCJsYXN0X25hbWUiOiJzdHJpbmciLCJ1c2VybmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaGFzaGVkX3Bhc3N3b3JkIjoiJDJiJDEyJEZXT0hMd041aGdBRUVVWDJHbzR6Qk9Ed3lndE9ROHJ4dDVKcUNTcnVDS1VtdXNQeUNiSkE2In19.eCCSCtp3m_Uull0Ieuadb1wXfk7TFxsDe1z22oobAEM",
  "token_type": "Bearer"
}`
<br>
<br>
<br>

![Logout](images/Logout.png)
This action logs a user out of the Wandrrr App
<br>
<br>
JSON Request Body:

`{
}`

<br>
<br>
Returns (Status Code 200):

`true`
<br>
<br>
<br>
