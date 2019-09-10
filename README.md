# Simple Todo Server
A backend for a simple todo app server.

## Quick start
Will need Node.js and NPM installed.

Install dependencies listed in package.json:
```sh
npm install
```

To start the server:
```sh
npm start
```

## Postman collection
There is a Postman collection which has the API setup with basic requests for playing with in the file `Simple Todo Server.postman_collection.json`.

## API
**GET: /api/items**

Returns a list of items.

**eg: GET http://localhost:3000/api/items**

Returns

```json
{
    "items": [
        {
            "id": 1,
            "text": "New Item"
        },
        {
            "id": 2,
            "text": "New Item 2"
        }
    ]
}
```

**POST: /api/items**

Creates a new item with the text sent in the POST body JSON.

**Body:**
```json
{
    "text": "A string"
}
```

**eg: POST http://localhost:3000/api/items**
**body:**
```json
{
    "text": "New Item"
}
```

Returns

```json
{
    "success": true,
    "newId": 1
}
```

The `newId` value will refer to the id of the new todo item created. This is then used to remove the item.

**DELETE: /api/items/:id**

Deletes an item with the given id

**eg: DELETE http://localhost:3000/api/items/1**

Returns

```json
{
    "success": true,
    "removed": true / false
}
```

