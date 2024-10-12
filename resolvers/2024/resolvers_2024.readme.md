#
 - Install the latest NodeJS Runtime LTS Release from https://nodejs.org/en
 - To check that Node is installed correctly run `node --version` on your terminal 

## Simple Backend for our Requests
Install NestJS CLI globally  
`npm i -g @nestjs/cli`
Then let NestJS set up a new project:
`cd ./resolvers/2024`
`nest new nestjs-resolvers-backend-2024`

Then install necessary deps
`cd .\nestjs-resolvers-backend-2024\`
`npm install @nestjs/core @nestjs/common @nestjs/typeorm typeorm sqlite3`
Then update the app.module.ts

Then generate a user module, because we will later give simple user data to our frontend.
For this we can use the Nest CLI
`nest generate module user`
Then create controller, service, entity, etc.
