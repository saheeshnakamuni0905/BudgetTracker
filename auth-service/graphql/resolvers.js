require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const resolvers={
    Query : {
        hello : () => "Hello, GraphQL!",
        users: async() => {
            return await User.find();
        },
    },

    Mutation : {
        register : async (_, {name, email, password}) => {
            try{
                const existingUser = await User.findOne({email});
                if(existingUser) throw new Error("User already exists");

                const hashPassword = await bcrypt.hash(password , 10);

                const user = new User({
                    name,
                    email,
                    password : hashPassword,
                    createdAt : new Date().toISOString(),
                    updatedAt : new Date().toISOString(),
                });

                await user.save();

                const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
                    expiresIn:"1h",
                });
                return {token, user};
            } catch(error){
                throw new Error(error.message);
            }
        },

        login : async (_, {email, password}) => {
            try{
                const user = await User.findOne({email});
                if(!user) throw new Error("User Not Found");
                console.log("Login Request:",{email, password});
                console.log("User Found: ", user);

                if(!user.password){
                    throw new Error("Missing password in DB");
                }
                console.log("stored Hash passowrd:", user.password);
                console.log("Entered Password: ", password);
                const isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch) throw new Error("Wrong Password");

                const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
                    expiresIn:"1h",
                });

                return {token, user};
            } catch (error){
                throw new Error(error.message);
            }
        },
            deleteUser: async (_, { name }) => {
                try {
                    const user = await User.findOneAndDelete({name});
                    if (!user) throw new Error("User not found");
                    return user;
                } catch (error) {
                    throw new Error(error.message);
                }
            }
    },
};

module.exports = resolvers;
