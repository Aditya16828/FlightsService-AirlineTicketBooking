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
  - created_at
  - updated_at

- _1 airplane_ can be used in _more than 1 flights_. Hence, there is a **one-to-many relationship between Airplane and Flights table**.
- _1 city_ can have _many airports_ but _1 airport_ belongs to only _1 city_. **One-to-many relationship between City and Airport table**.
- From _1 Airport_, _many Flights_ can fly, but _one flight_ can belong to only _1 airport_. **One-to-many relationship between Airport and Flight table**.


## Creating tables in DB
- **For DB City**
  - check if u r already in src/, if not then navigate into src/ and type the following command:
  `npx sequelize db:model --name=City --attributes=name:String`
  - Property `id`, `createdAt` and `updatedAt` will be created automatically by sequelize-cli.
  - Now, got to _migrations/_ and _models/_, in _migrations/_ there will be a file as `xxxxxxxxxxxxxx-create-city.js` and _models/_ will contain `city.js`.
  - Make the necessary changes required in the corresponding files. **(Remember that both the files should be consistent)**
  - Then, run the command `npx sequelize db:migrate` to apply the migrations.
  - _You may got to mysql local server to view or crosscheck the changes._

**GENERAL NOTE BEFORE PROCEEDING**
- REPOSITORY FOLDER -> should contain only those files interacting directly with the database.
  
- SERVICES FOLDER -> should contain those files having business logic. Will extract data from the database using the APIs exposed by the repository folder(layer).

- CONTROLLER FOLDER -> should contain those files which would help in receiving the request from client-side and do the desired task using the APIs exposed by the services folder(layer).

- ROUTES FOLDER -> should contain all the routes; this helps in avoiding the common prefix in the request url.

## Creating CRUD APIs
- **For City DB**