const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const path = require('path')

const resourceLimits = require('worker_threads');

const app = express();
const PORT = process.env.PORT || 8081

//make connection between dbsever and node app

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_vrs"
})

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 

//register endpoint
app.post('/register', (req, res) => {
    const {username, email, password} = req.body;
    //hash password
    bcrypt.hash(password, 10, (err, hashPass) => {
        if(err) throw err

        //get currnet data
        var createTime = new Date();
        var updateTime = new Date();

        //set role as user and is_active = 1
        userRole = 'user';
        is_active = 1;
    })
})

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));