const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user Schema & model 
const UserSchema = new Schema({
    Name : {
        type: String,
        required: [true, "Name field is required"]
    },
    Email: {
        type: String,
        required: [true, "Email field is required"]
    },
    Password: {
        type: String,
        required: [true, "Password field is required"]
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
