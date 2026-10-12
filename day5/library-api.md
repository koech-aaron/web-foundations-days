
# Library Books REST API Design

## Overview

This REST API manages books in a library. It supports listing, retrieving,
creating, updating, deleting, and searching for books by author.

Base URL: `https://api.example.com`

## Endpoints

### 1. List All Books

- **Method:** GET
- **Path:** `/books`
- **Description:** Returns a list of all books in the library.
- **Success status:** `200 OK`

### 2. Get One Book

- **Method:** GET
- **Path:** `/books/{id}`
- **Description:** Returns the details of a book with the specified ID.
- **Success status:** `200 OK`

### 3. Create a Book

- **Method:** POST
- **Path:** `/books`
- **Description:** Creates a new book in the library.
- **Example request body:**

  ```json
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "publishedYear": 1958
  }
  ```

- **Success status:** `201 Created`

### 4. Update a Book

- **Method:** PUT
- **Path:** `/books/{id}`
- **Description:** Replaces the details of an existing book.
- **Example request body:**

  ```json
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "publishedYear": 1959
  }
  ```

- **Success status:** `200 OK`

### 5. Delete a Book

- **Method:** DELETE
- **Path:** `/books/{id}`
- **Description:** Deletes the book with the specified ID.
- **Success status:** `204 No Content`

### 6. List Books by Author

- **Method:** GET
- **Path:** `/books?author=Chinua%20Achebe`
- **Description:** Returns books written by the specified author using
  the `author` query parameter.
- **Success status:** `200 OK`

## Error Responses

### 400 Bad Request

- **Description:** The request contains invalid data or missing required fields.
- **Example:** A request to create a book has no title or author.

### 404 Not Found

- **Description:** The requested book or resource does not exist.
- **Example:** A request to `GET /books/999` when book ID 999 does not exist.
