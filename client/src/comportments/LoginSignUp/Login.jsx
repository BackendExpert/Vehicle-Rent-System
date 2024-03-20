import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"

const Login = () => {
    const navigate = useNavigate()

    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    }) 

    const headleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8081/Login', LoginData)
            
            const loginToken = res.data.Token;

            //store token in localstorage
            localStorage.setItem('LoginToken', loginToken)
            
            //get and store login user role and email
            const userRole = res.data.LoginUser[0].role;
            const userEmail = res.data.LoginUser[0].email;

            //store data in localstore so that use secureLocalStorage
            secureLocalStorage.setItem("Login1", userRole);
            secureLocalStorage.setItem("login2", userEmail);

            //login to system

            if(res.data.Msg === "Success"){
                if(res.data.LoginUser[0].is_active === 0){
                    alert('Your Account has been Suspended. Unauthorized activity has been detected.')
                    localStorage.clear()
                    navigate('/')
                }
                else{
                    navigate('/Dashboard');
                }
            }

        }        
        catch(err){
            console.log(err)
        }

    }



  return (
    <div className='bg-[url(https://wallpapercave.com/wp/wp2707503.jpg)] bg-center bg-cover h-screen w-full'>
        <div className="lg:py-24 lg:mx-40 py-16 mx-8">
            <div className="bg-white lg:py-8 lg:px-24 py-10 px-8 rounded-md">
                <h1 className="text-3xl font-semibold">Login Here</h1>
                
                <div className="pl-4">
                    <form onSubmit={headleSubmit}>
                        <div className="my-4">
                            <label htmlFor="" className='text-xl'>Enter Email : </label>
                            <input type="email" className="my-2 w-full h-11 border rounded pl-2" required placeholder='Enter Email Address' name='email' 
                            onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="" className='text-xl'>Enter Password : </label>
                            <input type="password" className="my-2 w-full h-11 border rounded pl-2" required placeholder='Enter Password' name='password' 
                            onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                        </div>
                        <div className="my-4">
                            <button type="submit" className="w-1/2 h-12 border border-blue-500 rounded text-blue-500 duration-500 hover:text-white hover:bg-blue-500">Login</button>
                        </div>
                    </form>
                    <p>Dont't have an Account ? 
                        <Link to={'/Register'}>
                            <span className="pl-2 text-blue-500">Create New</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login