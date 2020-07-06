const express = require('express');
const mongoose = require('mongoose');
const index = express.Router();

// inti mondel
const userDB = require('../models/user');

index.get('/',(req,res)=>{
    console.log('index');
    res.render('index',{
        title : 'Shape'
    });
})

index.get('/user-signup',(req,res)=>{
   res.render('index_sign_up',{
       title : 'SignUp'
   })
})

// registrion algo
index.post('/user-signup',(req,res)=>{
    const {first_name,last_name,password,C_password,email,belly,arm,neck,thigh,height,weight,g_weight,goal} = req.body;
    const newUser = new userDB({first_name,last_name,password,email,belly,arm,neck,thigh,height,weight,g_weight,goal});
    let errors = [];
    if(password != C_password){
        errors.push({msg : 'Password Not Matching'})
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.render('index_sign_up', {
            title : 'Sign up',
            errors,first_name,last_name,email,belly,arm,neck,thigh,height,weight,g_weight,goal
        });
    }else{
        userDB.findOne({email : email},(err,docs)=>{
            if(err) throw err;
            if(!docs){
                errors.push({msg : 'Email already Registered'})
                res.render('index_sign_up',{
                    title : 'Sign up',
                    errors,first_name,last_name,email,belly,arm,neck,thigh,height,weight,g_weight,goal
                })
            }else{
                res.send('no problem data save');
            }
        })
    }
    newUser.save(()=>console.log('User Save'));
 })



//  login algo
index.post('/user-login',(req,res)=>{
    const {email,password} = req.body;
    userDB.findOne({email:email},(err,docs)=>{
        if(err) throw err;
        if(!docs){
            res.send('no user found with '+email+' id')
        }else{
            if(password == docs.password){
                res.send('hi '+docs.first_name+" "+docs.last_name+"\n"+docs)
            }else{
                res.send('password not correct');
            }
        }
    })
})


module.exports = index;  