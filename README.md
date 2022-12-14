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


## DB Design
- Airplane Table
  - id
  - model_number
  - capacity
- Flights Table
  - id
  - src_airport_id
  - dest_airport_id
  - arrival_datetime
  - departure_datetime
  - flight_number
  - airport_id
- City table
  - id
  - name
- Airport Table
  - id
  - name
  - city_id
  - address

- _1 airplane_ can be used in _more than 1 flights_. Hence, there is a **one-to-many relationship between Airplane and Flights table**.
- _1 city_ can have _many airports_ but _1 airport_ belongs to only _1 city_. **One-to-many relationship between City and Airport table**.
- From _1 Airport_, _many Flights_ can fly, but _one flight_ can belong to only _1 airport_. **One-to-many relationship between Airport and Flight table**.


## Creating tables in DB
- 