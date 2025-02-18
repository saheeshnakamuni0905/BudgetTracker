require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("MongoDB connected"))
        .catch((err)=>console.log("Error : ", err));

const server = new ApolloServer({});

async function startServer(){
    await server.start();
    server.applyMiddleware();

    app.listen({port:4000}, ()=>console.log(`Server is running on 4000 ${server.graphqlPath}`));
}

startServer();