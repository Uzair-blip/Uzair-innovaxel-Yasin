# URL Shortener API Documentation

## Overview
This document outlines the structure of the API endpoints for the URL Shortener service, including request formats, response structures, and installation instructions.

---

## Installation and Setup

### Backend Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Uzair-blip/url-short-assesment.git
   cd url-shortener-backend
   ```

2. Install dependencies:
   ```sh
   npm i 
   npm install cors express mongodb mongoose mongoose-sequence nanoid nodemon dotenv
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://uzairyasin76:JsQhEXF07rzyTSRs@cluster0.nll1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   BASE_URL=http://localhost:5000
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

---

## API Endpoints

### 1. Create a Short URL
#### `POST /shorten`
**Request Body:**
```json
{
  "url": "https://www.example.com"
}
```

**Response Status:** `201 Created`

**Response Example:**
```json
{
    "id": 3,
    "url": "https://www.example.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T11:38:32.972Z"
}
```

---

### 2. Retrieve Original URL
#### `GET /shorten/:shortCode`

**Response Status:**
- `200 OK`: Original URL retrieved successfully.
- `404 Not Found`: Short code not found.

**Response Example:**
```json
{
    "id": 3,
    "url": "https://www.example.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T11:38:32.972Z"
}
```

---

### 3. Update a Shortened URL
#### `PUT /shorten/:shortCode`
**Request Body:**
```json
{
  "url": "https://www.updated-url.com"
}
```

**Response Status:** `200 OK`

**Response Example:**
```json
{
    "id": "3",
    "url": "https://www.updated-url.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T12:14:22.106Z"
}
```

---

### 4. Delete a Shortened URL
#### `DELETE /shorten/:shortCode`

**Response Status:** `200 OK`

**Response Example:**
```json
{
    "message": "Short URL deleted successfully"
}
```

---

### 5. Get URL Statistics
#### `GET /shorten/:shortCode/stats`

**Response Status:** `200 OK`

**Response Example:**
```json
{
    "id": 3,
    "url": "https://www.example.com",
    "shortCode": "k6Wgfv",
    "createdAt": "2025-03-20T11:38:32.972Z",
    "updatedAt": "2025-03-20T11:38:32.972Z",
    "accessCount": 5
}
```

---

## Running the Project Locally

1. Ensure MongoDB is running.
2. Start the backend with `npm run dev`.
3. Use Postman or any API testing tool to interact with the endpoints.

---

Let me know if you need any modifications! 🚀

