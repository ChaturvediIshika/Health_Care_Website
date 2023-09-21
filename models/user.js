const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const schema=new mongoose.Schema({
    email:{
        type:String,
        trim:true
    },
    contact:{
        type:Number
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    }],
    profile:String,
    isAdmin:Boolean,
})

schema.plugin(passportLocalMongoose);
const user=mongoose.model('User',schema);
module.exports=user;