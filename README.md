# inQuizlit

inQuizlit Express server to provide data for users, questions, and answers to inQuizlit app. 

## Links

* [inQuizlit](https://inquizlit-iq.surge.sh) - inQuizlit app official website.
* [inQuizlit Front-End Repository](https://github.com/jimbucktoo/inquizlit-frontend) - inQuizlit front-end Github repository.
* [inQuizlit Back-End Repository](https://github.com/keschaefer/inquizlit-backend) - inQuizlit back-end Github repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

1. Install dependencies:

```
npm install
```

2. Create local database

```
psql

create database INQUIZLIT-DB
```

3. Migrate to the latest deployment:

```
knex migrate:latest
```

4. Run the seeds:

```
knex seed:run
```

5. Intialize the server

```
npm start
```

6. Visit the following URL and you should see the data populate the page:

```
http://localhost:3001/questions 
http://localhost:3001/users
http://localhost:3001/answers 
```

## Technologies

* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Node.js](https://nodejs.org/en/about/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
* [Knex](https://knexjs.org/) - Knex.js is a SQL query builder for PostgreSQL.
* [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a an open source object-relational database system.

## Contributing

* [grantfogle](https://github.com/grantfogle) - Grant Fogle
* [jimbucktoo](https://github.com/jimbucktoo) - Jimmy Liang
* [keschaefer](https://github.com/keschaefer) - Kate Schaefer
* [jtawilliams](https://github.com/jtawilliams) - Justin Williams


