```markdown
# Healthcare Services API

This is a simple API for managing healthcare services using Node.js, Express, and MongoDB Atlas. It allows users to create, retrieve, update, and delete services.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB Atlas:**

   - Create a new cluster on MongoDB Atlas.
   - Add a new database and collection (e.g., `healthcare` and `services`).
   - Obtain your connection string and replace the placeholder in your application code (in your `.env` file) with the following format:

     ```
     mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
     ```

## Running the Application

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Add a New Service

- **Endpoint:** `POST /api/services`
- **Request Body:**

  ```json
  {
    "name": "Service Name",
    "description": "Service Description",
    "price": 100
  }
  ```

- **Response:** Returns the created service with a status of `201`.

### 2. Get All Services

- **Endpoint:** `GET /api/services`
- **Response:** Returns an array of all services.

### 3. Update a Service

- **Endpoint:** `PUT /api/services/:id`
- **Request Body:**

  ```json
  {
    "name": "Updated Service Name",
    "description": "Updated Service Description",
    "price": 150
  }
  ```

- **Response:** Returns the updated service with a status of `200`.

### 4. Delete a Service

- **Endpoint:** `DELETE /api/services/:id`
- **Response:** Returns a message confirming the deletion with a status of `200`.

## Testing with Postman

1. **Install [Postman](https://www.postman.com/downloads/)** if you haven't already.

2. **Create a new collection** in Postman for your API.

3. **Add requests for each endpoint:**

   - **Add a New Service:**
     - Method: `POST`
     - URL: `http://localhost:3000/api/services`
     - Body: Select `raw` and choose `JSON`, then paste the JSON request body.
     
   - **Get All Services:**
     - Method: `GET`
     - URL: `http://localhost:3000/api/services`

   - **Update a Service:**
     - Method: `PUT`
     - URL: `http://localhost:3000/api/services/:id` (replace `:id` with the actual service ID)
     - Body: Same as Add a New Service.

   - **Delete a Service:**
     - Method: `DELETE`
     - URL: `http://localhost:3000/api/services/:id` (replace `:id` with the actual service ID)

4. **Send the requests** and view the responses in Postman.


### Summary of Sections
- **Prerequisites:** Lists required software and services.
- **Installation:** Steps to clone the repo and install dependencies.
- **Running the Application:** Instructions to start the server.
- **API Endpoints:** Details about available endpoints and their request/response formats.
- **Testing with Postman:** Instructions on how to use Postman to test the API.
