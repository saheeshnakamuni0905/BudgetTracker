require("dotenv").config();
const {ApolloServer} = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const app = express();


mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("MongoDB connected"))
        .catch((err)=>console.error("MongoDB connection failed: ",err));

const server = new ApolloServer({typeDefs, resolvers});
async function startServer() {
        await server.start();
        server.applyMiddleware({app});

        app.listen({port:4000}, ()=>console.log(`Server is running on 4000 ${server.graphqlPath}`));
}

startServer();