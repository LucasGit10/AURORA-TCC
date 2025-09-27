Project Aurora (Final Project)

This is a full-stack project developed as a Final Course Project, consisting of a Next.js frontend, a NestJS backend, and a MongoDB database. The entire development environment is orchestrated with Docker and Docker Compose.

Tech Stack

    Backend: NestJS, TypeScript, Mongoose

    Frontend: Next.js, TypeScript, React

    Database: MongoDB

    Environment: Docker, Docker Compose

Prerequisites

Before you begin, ensure you have the following tools installed on your machine:

    Docker

    Docker Compose (usually included with Docker Desktop)

    Git

Getting Started

Follow the steps below to run the application in your local development environment.

    Clone the Repository
    Bash

git clone <YOUR_GIT_REPOSITORY_URL>
cd AURORA-TCC

Build and Start the Containers

In the project's root directory (where the docker-compose.yml file is located), run the following command:
Bash

    docker-compose up --build

        The docker-compose up command will download the necessary images (Node.js and MongoDB), build the images for the frontend and backend, and start all services.

        The --build flag forces a rebuild of the images if there are any changes to the Dockerfiles or source code.

    Wait for Initialization

    The terminal will display the logs for all services. Wait until the messages indicate that the backend and frontend have started successfully.

Accessing the Application

With the containers running, the application will be available at the following addresses:

    Frontend (Web Application): http://localhost:3000

    Backend (API): http://localhost:3001

    Database (MongoDB): mongodb://root:password123@localhost:27017

        You can use this address to connect to the database using a tool like MongoDB Compass.

Testing the API

You can use tools like Postman, Insomnia, or curl to test the API endpoints.

Create a new item

Bash

curl -X POST http://localhost:3001/items \
-H "Content-Type: application/json" \
-d '{
    "name": "Test Item",
    "description": "Description for the test item."
}'

List all items

Bash

curl http://localhost:3001/items

Stopping the Application

    To stop the containers, press Ctrl + C in the terminal where docker-compose is running.

    To stop and remove the containers, networks, and volumes, run:
    Bash

docker-compose down
