const mongoose=require('mongoose');   // used with mocha for testing 
const schema =mongoose.Schema;    // using mongoose to handle our mongodb
// creating a schema for messaging // waiting for db of the accounts sender and receiver are strings for now
const pmSchema  =new schema ({      
sender: String,     // the username of the sender suppose to be implemented like this [AccountSchema]
receiver: String,   // the username of the receiver suppose to be implemented like this [AccountSchema]
subject :String,    // the  subject of the message
messageBody : String , // the body of the message
isRead : Boolean,  // true when the message is read by the other end(receiver)
messageDate: Date
});
const pm= mongoose.model('PrivateMessaging',pmSchema); // creating a model for the pm schema for implmentation 
module.exports=pm;

