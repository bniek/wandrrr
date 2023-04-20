steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(100) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE wandrrrs (
            wandrrrs_id SERIAL NOT NULL,
            owner_id INT NOT NULL,
            title VARCHAR(50) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE,
            location VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            mood VARCHAR(50),
            companion VARCHAR(150),
            companion_dropdown VARCHAR(50),
            weather VARCHAR(50),
            photos01 BYTEA NOT NULL,
            photos02 BYTEA,
            photos03 BYTEA,
            photos04 BYTEA,
            photos05 BYTEA,
            timestamp TIMESTAMPTZ,
            rating VARCHAR,
            CONSTRAINT pk_wandrrrs PRIMARY KEY (wandrrrs_id),
            CONSTRAINT fk_accounts FOREIGN KEY (owner_id) REFERENCES accounts (id) ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE wandrrrs;
        """
    ],
    [
        # "Up" SQL statement for trigger
        """
        CREATE OR REPLACE FUNCTION update_wandrrrs_timestamp()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.timestamp = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        CREATE TRIGGER update_wandrrrs_timestamp_trigger
        BEFORE INSERT ON wandrrrs
        FOR EACH ROW
        EXECUTE FUNCTION update_wandrrrs_timestamp();
        """,
        # "Down" SQL statement for trigger
        """
        DROP TRIGGER update_wandrrrs_timestamp_trigger ON wandrrrs;
        DROP FUNCTION update_wandrrrs_timestamp();
        """
    ]
]
