# Welcome to Flights Search Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path of your root directory of te dowloaded project.
- Create a `.env` file in the root directory and add the following environment varibale
    - `PORT=3001`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "root",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flightsNsearch_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, got to the src folder from your terminal and execute `npx sequelize db:create`.