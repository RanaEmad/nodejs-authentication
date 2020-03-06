# nodejs-authentication
A node app that provides endpoints to enable user to authenticate and store his passwords through JWT

# Installation
- Import the database schema provided in nodejs-authentication.sql
- Create a .env file and update it with the necessary info provided in .env.example
- run `npm install`
- run `npm start`

# Endpoints
- POST /api/users/register
- POST /api/users/login
- GET /api/passwords
- GET /api/passwords/:id
- PUT /api/passwords/:id
- DELETE /api/passwords/:id

# Author
- **Rana Emad** - (https://github.com/RanaEmad)

# License
This project is licensed under the MIT License