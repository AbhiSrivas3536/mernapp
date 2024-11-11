const express = require('express')
const router = express.Router() // we call fxn here
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

const jwtSecret="MyNameIsAbhiSrivastavaDeliGo$#AB" //can be any string with usually 32 characters 



// create user 
router.post("/createuser", [body('email','Invalid Email').isEmail(),body('name').isLength({ min: 5 }),
body('password','Incorrect Password').isLength({ min: 5 })], async (req, res) => {
    
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //bcrypt
    const salt = await bcrypt.genSalt(10);// specifying salt for hashing
    let secPassword= await bcrypt.hash(req.body.password,salt);//hashed pass , first para->inp pass second para->salt


    try {
        User.create({
            //chronology can be changed but rest all schema needs to be the same
            name: req.body.name,
            password: secPassword,//secPassword is hashed which will be stored in db
            location: req.body.location,
            email: req.body.email

        })
        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})


// login user 
router.post("/loginuser",  [body('email','Invalid Email').isEmail(),
    body('password','Incorrect Password').isLength({ min: 5 })],async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        let email= req.body.email;
        
        try {
            let userData=await User.findOne({email});
            if(!userData){
                return res.status(400).json({errors : "Try Logging in with correct credentials"})
            }

            const pwdCompare= await bcrypt.compare(req.body.password,userData.password);//gives a bool val after compare
            if(!pwdCompare){
                return res.status(400).json({errors : "Try Logging in with correct credentials"})
            }

            const data={// data needs to be an object
                user:{
                    id:userData.id
                }
            }
            //making token using data which is based on id in db
            //header -> by default , payload->data , signature->jwtsecret
            const authToken=jwt.sign(data , jwtSecret); //can add expirydate for limited session time for e.g. in banking
            return res.json({success:true , authToken:authToken});
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
})

module.exports = router;