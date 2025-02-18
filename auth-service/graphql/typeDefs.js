const { gql } = require('apollo-server-express');
const { EmailAddress } = require('graphql-scalars');

const typeDefs = gql`
    scalar EmailAddress

    type User{
        id: ID!,
        name: String!,
        email: EmailAddress!,
        password: String!,
        createdAt: String!,
        updatedAt: String!,
    }
    
    type AuthPayload {
        token : String!,
        user: User!,
    }
    
    type Query {
        hello : String!
        users:[User!]!
    }

    type Mutation{
        register(name:String!, email: EmailAddress!, password: String!):AuthPayload!
        login(email:EmailAddress!, password:String!): AuthPayload!
        deleteUser(name:String!): User!
    }
`;

module.exports = typeDefs;