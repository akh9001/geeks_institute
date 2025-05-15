brew services start postgresql
brew services stop postgresql

CREATE USER your_username WITH PASSWORD 'your_password';

🛡️ Optional: Add Privileges

ALTER USER asmaa WITH CREATEDB;        -- Can create databases
ALTER USER asmaa WITH CREATEROLE;      -- Can create roles
ALTER USER asmaa WITH SUPERUSER;       -- Full admin privileges (use with care)

🚀 Bonus: Create User from Terminal (without entering psql)

psql -U postgres -c "CREATE USER asmaa WITH PASSWORD 'StrongP@ssw0rd';"

🔧 1. Connecting to PostgreSQL

psql -U username -d dbname

📦 2. Database Management

CREATE DATABASE mydb;
DROP DATABASE mydb;
\l                   -- List all databases
\c mydb              -- Connect to a database

👤 3. User Management

CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER USER myuser WITH SUPERUSER;
DROP USER myuser;
\du                  -- List all roles/users

📁 4. Table Management

CREATE TABLE tablename (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

DROP TABLE tablename;
\d tablename         -- Describe table structure
\dt                  -- List all tables

🧪 5. CRUD Operations

INSERT INTO tablename (name) VALUES ('Asmaa');
SELECT * FROM tablename;
UPDATE tablename SET name = 'Ainzo' WHERE id = 1;
DELETE FROM tablename WHERE id = 1;

⚙️ 6. Exiting & Help

\q                   -- Quit psql
\?                   -- Help on psql commands

📤 7. Import/Export Data

# Export
pg_dump -U username dbname > backup.sql

# Import
psql -U username dbname < backup.sql

🧠 8. General psql Shortcuts

| Command    | Description                       |
| ---------- | --------------------------------- |
| `\l`       | List all databases                |
| `\dt`      | List all tables in the current DB |
| `\du`      | List all users                    |
| `\c db`    | Connect to a DB                   |
| `\d table` | Describe a table                  |
| `\q`       | Quit the psql shell               |

✅ Option 2: From Terminal (without entering psql)
createdb -U postgres mydb
✅ Grant Access to a User
GRANT ALL PRIVILEGES ON DATABASE mydb TO asmaa;

An aggregate function is a special kind of function that operates on several rows of a query at once, returning a single result.