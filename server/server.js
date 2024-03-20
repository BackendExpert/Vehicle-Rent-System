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
    // console.log(req.body)

    const checkSql = "SELECT * FROM users WHERE email = ?";
    connection.query(checkSql, [req.body.email], (err, result) => {
        if(err) throw err;

        if(result.length > 0){
            return res.json({Error: "User Already in Exists via Email"})
        }
        else{
            if(req.body.password.length <= 3){
                return res.json({Error: "Password Must be at least 4 latters"})
            }
            else{
                const password = req.body.password;
   
                //hash password
                bcrypt.hash(password, 10, (err, hashPass) => {
                    if(err) throw err;
            
                    // console.log(hashPass)
            
                    //get currnet data
                    var createTime = new Date();
                    var updateTime = new Date();
            
                    //set role as user and is_active = 1
                    userRole = 'user';
                    is_active = 1;
            
                    const sql = "INSERT INTO users(email, username, password, role, create_at, update_at, is_active) VALUES (?)";
                    const values = [
                        req.body.email,
                        req.body.username,
                        hashPass,
                        userRole,
                        createTime,
                        updateTime,
                        is_active       
                    ]
                    connection.query(sql, [values], (err, result) => {
                        if(err){
                            return res.json({Error: "ERROR on SERVER"})
                        }
                        else{
                            return res.json({Status: "Success"})
                        }
                    })
                })
            }
        }
    })



})

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));