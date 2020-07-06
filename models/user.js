const mongoose = require('mongoose');

const user = new mongoose.Schema({
    first_name:{
        type : String
    },
    last_name : {
        type : String
    },
    password : {
        type : String
    },
    phone : {
        type : String
    },
    email : {
        type : String
    },
    // mesurment
    belly : {
        type : Number
    },
    arm : {
        type : Number
    },
    neck : {
        type : Number
    },
    thigh :{
        type : Number
    },
    height : {
        type : Number
    },
    weight : {
        type : Number
    },
    // goals
    g_weight : {
        type : Number
    },
    goal :{
        type : String
    },
    Date_of_creation : {
        type : Date,
        default : Date.now().toString()
    }
})

function date(){
    var d = new Date();
    d.getFullYear()+'-'+d.getMonth()+1 +'-'+d.getDate()
}

module.exports = mongoose.model('user', user);