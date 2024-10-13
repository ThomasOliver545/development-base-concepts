# Prerequisites
 - Install the latest NodeJS Runtime LTS Release from https://nodejs.org/en
 - To check that Node is installed correctly run `node --version` on your terminal 

## How to run
Start NestJS Backend:   
`cd nestjs-resolvers-backend-2024`  
`npm i`  
`npm run start:dev`  

Start Angular Frontend:
`angular-resolvers-frontend-2024`  
`npm i`  
`npm run start`

## Setup Steps for our NestJS Backend
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
0
## Frontend Steps
Install Angular CLI globally  
`npm install -g @angular/cli`
Then let Angular CLI setup a new project:
`ng new angular-resolvers-frontend-2024`
cd into the project
`cd angular-resolvers-frontend-2024`

Then create our code, you can use Angular Schematics (https://angular.dev/cli/generate):
Generate service: `ng generate service user`  
Generate resolver: `ng generate resolver user`  
Generate component: `ng generate component user`  
Generate Interceptor: `ng generate interceptor loading`  
Generate the `user.interface.ts`  

Then start implementing the code.
