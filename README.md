# Installation

For run locally it needs a .env file with the following environment variables:

```
DB_PASSWORD=YOUR_DB_PASSWORD_HERE
PORT=YOUR_SERVICE_PORT
ALLOWED_ORIGINS=http://localhost:3000,https://*.example.com
```

ALLOWED_ORIGINS includes a comma separated list for the allowed CORS sites.

To change the database config like server, database and user, the file src/config.js needs to be updated.

Install dependencies npm install or yarn
To start the project run npm run start or yarn start

The database scripts example (remember to change YOUR_DATABASE_NAME, YOUR_USER and YOUR_PASSWORD):

```sql
CREATE DATABASE YOUR_DATABASE_NAME;
CREATE USER 'YOUR_USER'@'%' IDENTIFIED BY 'YOUR_PASSWORD';
GRANT ALL PRIVILEGES ON YOUR_DATABASE_NAME.* TO 'YOUR_USER'@'%';
CREATE TABLE users (
     id	int(11) Auto Increment,
     name	varchar(255) NULL,
     username	varchar(255) NULL,
     email	varchar(255) NULL,
     addressStreet	varchar(255) NULL,
     addressSuite	varchar(255) NULL,
     addressCity	varchar(255) NULL,
     addressZipcode	varchar(255) NULL,
     addressGeoLat	varchar(50) NULL,
     addressGeoLng	varchar(50) NULL,
     phone	varchar(255) NULL,
     website	varchar(255) NULL,
     companyName	varchar(255) NULL,
     companyCatchPhrase	varchar(255) NULL,
     companyBs	varchar(255) NULL,
);
```
