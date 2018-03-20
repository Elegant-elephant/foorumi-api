# Foorumi-API
This is a NodeJS/Angular practicing project created by Xpdmk and Elegant-elephant. The server API handles creation of topics, message in the topics and replies in the messages and are updated live after the data has been submitted to the API.

The language currently used is finnish.

## Database
Project uses SQLITE database by default. If system has an DATABASE_URL enviroment variable, it uses POSTGRES instead.

## Demo
This project includes everything in terms of dependences, but the SQLITE or POSTGRES database has to be created from a seed. This can be done by running: 

```
node db/seed.js
```

To start the app run: 

```
npm start
```
