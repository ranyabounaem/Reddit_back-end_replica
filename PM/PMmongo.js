const mongoose=require('mongoose');   // used with mocha for testing 
const schema =mongoose.Schema;    // using mongoose to handle our mongodb
// creating a schema for messaging // waiting for db of the accounts sender and receiver are strings for now
const pmSchema  =new schema ({      
sender: String,     // the username of the sender suppose to be implemented like this [AccountSchema]
receiver: String,   // the username of the receiver suppose to be implemented like this [AccountSchema]
subject :String,    // the  subject of the message
messageBody : String , // the body of the message
isRead : Boolean,  // true when the message is read by the other end(receiver)
messageDate: Date, // the exact date of data entry utc default
isBlocked :Boolean   // true when the sender is already blocking the receiver
});
const pm= mongoose.model('PrivateMessaging',pmSchema); // creating a model for the pm schema for implmentation 
module.exports.pm=pm;


const messageBlockListSchema  =new schema ({      
    blocker:{
        type: String,
        required: true,
        index:true
           },    // the username of the one who requested to block to be implemented like this [AccountSchema]
    blocked: {
        type: String,
        required: true,
        index: true
      }   // the username of the blocked user suppose to be implemented like this [AccountSchema]
    
});

messageBlockListSchema.index({
    blocker: 1,
    blocked: 1,
},{unique:true});
    const messageBlockList= mongoose.model('MessageBlockList',messageBlockListSchema); // creating a model for the pm schema for implmentation 
    module.exports.messageBlockList=messageBlockList;
    