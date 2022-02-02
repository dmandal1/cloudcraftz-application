const mongoose = require('mongoose');


const questionSchema =mongoose.Schema({

    topic: {
        type: String // 
    },
    ranking: {
        type:String
    },
    questionType: {
        type:String
    },
    level:{
        type:String
    },

    text: {
        type:String,
        unique:true
    },
    markdownText: {
        type:String
    },
    imgURL: {
        type:String
    },
    options:{
        type:Array
    },
    solution:{
        text:String,
        markdownText:String,
        content: String,
        markdownContent:String,
        imgUrl:[String]
    }
});

module.exports = mongoose.model('Question',questionSchema);