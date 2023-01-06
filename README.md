# DOCUMENTATION

This micro-service mainly focuses on creation, deletion, updation and fetching all the flights, airports and cities in the database. The APIs which read the flights from databases are exposed to the customers, others can only be accessed by the Admins.

Features:

- Create, Read, Update and Delete cities (For Admins)
- Create, Read, Update and Delete Airports for a particular city (For Admins)
- Read Flights (For customers as well as for Admins) based on certain filters. (filters are not mandatory)
- Create, Update and Delete Flights (For Admins)
- Removal of past Flights are done automatically

## DB Designs

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

### Flight APIs
