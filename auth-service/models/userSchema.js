const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{ type : String, required : true, timestamps: true },
    email:{
        type:String, 
        required:true, 
        unique:true, 
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"]
    },
    password:{
        type:String, 
        required:true, 
        minlength:8, 
        validate:{
            validator: function(value){
                return /[A-Z]/.test(value);
            }, 
            message : "Password must contain at least one uppercase letter"
        }, 
    },
}, { timestamps: true },);

module.exports = mongoose.model("User", userSchema);