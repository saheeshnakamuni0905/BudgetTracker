const { gql } = require('apollo-server-express');

const typeDef = gql`
    type User{
        id: ID!,
        name: String,
        email: String,
        password: String,
        createdAt: String,
        updatedAt: String,
    }
    
    type AuthPayload {
        token : String!,
        user: User!,
    }
    
    type Query {
        hello : String!
        users:[User!]!
    }

`