const express=require('express');
const { isLoggedIn } = require('../middleware');
const router=express.Router();
const Offers=require('../models/offers');




module.exports=router;