import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    tittle : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    another : {
        type : String,
        required : true, 
        default : 'Anonymous'
    }, 
    attachment : {
        type : String
    },
    likeCount : {
        type : Number,
        default : 0,  
    }

    //createdAt, updatedAt
}, {timestamps: true});

export const PostModel  = mongoose.model('Post', schema);