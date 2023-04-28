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
