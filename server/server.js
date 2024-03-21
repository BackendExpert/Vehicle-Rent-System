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
                    userRole = 'buyer';
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


//login Endpoint
app.post('/Login', (req, res) =>{
    console.log(req.body)

    const sql = "SELECT * FROM users WHERE email = ?"
    connection.query(sql, [req.body.email], (err, result) => {
        if(err) throw err

        if(result.length > 0){
            //compare password
            const password = req.body.password;
            bcrypt.compare(password, result[0].password, (err, passMatch) => {
                if(err) throw err

                if(passMatch){
                    //generate JWT Token
                    const token = jwt.sign(
                        {email: result[0].email, role: result[0].role, is_active: result[0].is_active},
                        'your-secret-key',
                        {expiresIn: '1h'}
                    );
                    res.json({Token: token, Msg: "Success", LoginUser:result})
                    console.log(result)
                }
                else{
                    res.json({Error: "Password not Match "})
                }
            })
        }
        else{
            res.json({Error: "User Does not Exists"})
        }
    })
})

//unaccess endpoint
app.post('/UnAccess', (req, res) => {
    const email = req.body.email;
    const role = req.body.role;
    // console.log(email, role)

    const updateSql = "UPDATE users SET is_active = ? WHERE email = ? ";
    const is_active = 0;

    connection.query(updateSql, [is_active, email], (err, result) => {
        if(err){
            return res.json({Error: "ERROR on SERVER"})
        }
        else{
            // console.log("OK")
            const checkSql = "SELECT * FROM unaccess WHERE email = ?";
            connection.query(checkSql, [email], (err, result) => {
                if(err){
                    return res.json({Error: "ERRROR on SERVER 1"})
                }
                else{
                    if(result.length == 0){
                        const sql = "INSERT INTO unaccess(email, role, access_at) VALUES (?)";
                        const access_at = new Date();

                        connection.query(sql, [email, role, access_at], (err, result) =>{
                            if(err){
                                return res.json({Error: "ERROR on SERVER"})
                            }
                            else{
                                return res.json({Message: "UnAccess Reported, The account has been suspended"})
                            }
                        })
                    }
                    else{
                        return false
                    }
                }
            })
        }
    })
    
})

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));