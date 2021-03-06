const mongoose = require('mongoose');


const chatSchema = mongoose.Schema({

    index:{
        type: String
    },
    socketId:{
        type:String
    },
    roomName:{
        type:String
    },
    username:{
        type:String
    },
    message:{
        type:String
    },
    sendAt:{
        type:Date
    },
    regDate:{
        type:Date
    },
})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = { Chat } 