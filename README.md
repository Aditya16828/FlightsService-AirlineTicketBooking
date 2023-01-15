# DOCUMENTATION

This micro-service mainly focuses on creation, deletion, updation and fetching all the flights, airports and cities in the database. The APIs which read the flights from databases are exposed to the customers, others can only be accessed by the Admins.

Features:

- Create, Read, Update and Delete cities (For Admins)
- Create, Read, Update and Delete Airports for a particular city (For Admins)
- Read Flights (For customers as well as for Admins) based on certain filters. (filters are not mandatory)
- Create, Update and Delete Flights (For Admins)
- Removal of past Flights are done automatically

## DB Designs

- Airplane Table
  - id
  - model_number
  - capacity
- Flights Table
  - id
  - airplaneid
  - src_airport_id
  - dest_airport_id
  - arrival_datetime
  - departure_datetime
  - flight_number
  - price
  - boardingGate
  - totalSeats
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

![DB Design Image](./docImages/DB%20Designs.jpeg)

## APIs exposed and its corresponding URLS

_All the APIs are CRUD based._

### City APIs

- **For Creating a City:**  
URL = <http://localhost:3003/api/v1/city>  
Request Format (post, sent in body) (json):

```json
{
    "name": "<CITY_NAME_STRING>"
}
```

- **For Creating a Cities:**  
URL = <http://localhost:3003/api/v1/cities>  
Request Format (post, sent in body) (json):

```json
[
    {"name": "<CITY_NAME1_STRING>"},
    {"name": "<CITY_NAME2_STRING>"},
    {"name": "<CITY_NAME3_STRING>"},
    {"name": "<CITY_NAME4_STRING>"}
]
```

- **To fetch a City:**  
URL = <http://localhost:3003/api/v1/city/:id>  
Request format (get, sent in request params)

- **To fetch all Cities:**  
URL = <http://localhost:3003/api/v1/city>  
Request format (get)

- **To update a City:**  
URL = <http://localhost:3003/api/v1/city>  
Request format (patch, sent in body) (json):

```json
{
    "name": "<CITY_NAME_STRING>"
}
```

- **To delete a City:**  
URL = <http://localhost:3003/api/v1/city/:id>  
Request format (delete)

### City Airport APIs

- **For creating Airport**
URL = <http://localhost:3003/api/v1/city/airport/:cityid>
Request format (post, sent in body) (json):

```json
[
  {
   "name":"<AIRPORT_NAME>",
   "address": "<AIRPORT_ADDRESS>" (optional)
  }
]
```

- **To fetch all the Airports of a particular City**
URL = <http://localhost:3003/api/v1/city/airport/:cityid>
Request format (get)

- **To fetch a particular Airport**
URL = <http://localhost:3003/api/v1/airport/:id>
Request format (get)

- **To delete an Airport**
URL = <http://localhost:3003/api/v1/airport/:id>
Request format (delete)

- **To update details of an Airport**
URL = <http://localhost:3003/api/v1/airport/:id>
Request format (patch, sent in body) (json):

```json
{
 "name":"<AIRPORT_NAME>", (optional)
 "address": "<AIRPORT_ADDRESS>" (optional)
}
```

### Flight APIs

- **For creating a Flight**

- **To fetch a Flight**

- **To fetch all the Flights in DB**

- **To delete a Flight**

- **To update a Flight**
