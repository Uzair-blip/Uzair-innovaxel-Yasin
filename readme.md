# URL Shortener API Response Structure

## Overview

This document outlines the structure of the response returned by the URL Shortener API when a new short URL is successfully created.

## Successful Response Structure

When a user successfully creates a short URL using the POST `/shorten` route, the API responds with a JSON object containing the following fields:

## POST /shorten

### Response Status

- **201 Created**: Indicates that the short URL was successfully created.

### Example Request
**original url** : {
  "url": "https://www.abdndnjsffd.com"
}
post route result
{
    "id": 3,
    "url": "https://www.abdndnjsffd.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T11:38:32.972Z"
}

## GET /shorten/:shortCode

### Response Status

- **200 OK**: Indicates that the original URL was successfully retrieved.
- **404 Not Found**: Indicates that the provided short code does not correspond to any existing URL.

### Example Request
**shortCode** : `k6Wgfv`

### Example Response
{
    "id": 3,
    "url": "https://www.abdndnjsffd.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T11:38:32.972Z"
}

# API Documentation

### Response Status
 **201 Created**: Indicates that the short URL code original url was updated successfully.
### Endpoint
## PUT /shorten/:shortCode

** body **
{
  "url": "https://www.example.com/some/updated/url"
}
### Example Response
{
    "id": "3",
    "url": "https://www.example.com/some/updated/url",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T12:14:22.106Z"
}
