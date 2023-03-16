# TestApp

## Requirements

- Docker
- Node JS

# Running

1. Install packages with `npm install`
2. Start database with `docker-compose up`
3. Start application with `npm start`
4. Send requests with REST client.
5. Shut down the database with `docker-compose down`

# Currect Endpoints

- `GET localhost:3000/acronym` : will return a list of the current  acronyms.
- `POST localhost:3000/acronym` : will add an acronym to the database using the given format.

```json
{
	"_id": "fgsgsdgsdgs",
	"acronym": "NASA",
	"definition": "space thingy"
}
```

- `PATCH localhost:3000/acronym/acronymID` : will update an acronym in the database with the given ID using the given format.
```json
{
	"acronym": "CIA"
}
```

- `DELETE localhost:3000/acronym/acronymID` : will delete an acronym from the databse with a given ID.