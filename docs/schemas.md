| Accounts Table | |
| :--- | :--- |
| **Accounts** | **Type** |
| id | SERIAL PRIMARY KEY NOT NULL |
| first_name | VARCHAR(100) NOT NULL |
| last_name | VARCHAR(100) NOT NULL |
| username | VARCHAR(100) NOT NULL UNIQUE|
| email | VARCHAR(100) NOT NULL UNIQUE|
| hashed_password | VARCHAR(100) NOT NULL |

| Wandrrrs Table ||
| :--- | :--- |
| **Wandrrrs** | **Type** |
| wandrrrs_id | SERIAL NOT NULL |
| owner_id | INT NOT NULL |
| title | VARCHAR(50) NOT NULL |
| start_date | DATE NOT NULL |
| end_date | DATE |
| location | VARCHAR(100) NOT NULL |
| description | TEXT NOT NULL |
| mood | VARCHAR(50) |
| companion | VARCHAR(150) |
| companion_dropdown | VARCHAR(50) |
| weather | VARCHAR(50) |
| photos01 | BYTEA NOT NULL|
| photos02 | BYTEA |
| photos03 | BYTEA |
| photos04 | BYTEA |
| photos05 | BYTEA |
| timestamp | TIMESTAMPTZ |
| rating | VARCHAR|
CONSTRAINT pk_wandrrrs PRIMARY KEY (wandrrrs_id),
CONSTRAINT fk_accounts FOREIGN KEY (owner_id)
REFERENCES accounts (id) ON DELETE CASCADE

**
mood, companion_dropdown and rating fields are dropdown menu items on the front end and listed below in their respective tables

| mood ||
| :--- | :---: |
| **Input Value** | |
|"0"| |
| "1" |🙂|
|"2"|🥰|
|"3"|😇|
|"4"|🤣|
|"5"|🥳|
|"6"|🤤|
|"7"|🤒|
|"8"|🥹|
|"9"|😅|
|"10"|😒|
|"11"|😞|
|"12"|😕|
|"13"|😢|
|"14"|😡|
|"15"|🤯|
|"16"|🤢|
|"17"|😴|
|"18"|🥱|
|"19"|💀|

|companion_dropdown||
| :---| :---:|
|**Input Value**||
|""||
|"dog1"|🐶|
|"dog2"|🦮|
|"dog3"|🐕‍🦺|
|"dog4"|🐩|
|"cat2"|🐱|
|"cat2"|🐈|
|"cat3"|🐈‍⬛|
|"baby1"|👶|
|"bestfriend1"|👯‍♂️|
|"bestfriend2"|👯‍♂️|
|"bestfriend3"|👫|
|"bestfriend4"|👭|
|"bestfriend5"|👬|
|"family1"|👨‍👨‍👦|
|"family2"|👩‍👩‍👦|
|"family3"|👨‍👩‍👦‍👦|
|"family4"|👪|
|"family5"|👩‍👦|
|"family6"|👨‍👦|
|"couple1"|👩‍❤️‍👨|
|"couple2"|👩‍❤️‍👩|
|"couple3"|💑|
|"couple4"|👨‍❤️‍👨|

|rating||
|:---|:---|
|**Input Value**||
|""| |
|"1"|⭐️|
|"2"|⭐️⭐️|
|"3"|⭐️⭐️⭐️|
|"4"|⭐️⭐️⭐️⭐️|
|"5"|⭐️⭐️⭐️⭐️⭐️|
