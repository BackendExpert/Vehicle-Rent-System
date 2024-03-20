import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-[url(https://wallpapercave.com/wp/wp2707503.jpg)] bg-center bg-cover h-screen w-full'>
        <div className="lg:py-[150px] lg:mx-40 py-16 mx-8">
            <div className="bg-white lg:py-8 lg:px-24 py-10 px-8 rounded-md">
                <h1 className="text-3xl font-semibold">Register Here</h1>
                
                <div className="pl-4">
                    <form>
                        <div className="my-4">
                            <label htmlFor="" className='text-xl'>Enter Name : </label>
                            <input type="text" className="my-2 w-full h-11 border rounded pl-2" name='username' required placeholder='Enter Name' />
                        </div>
                        <div className="my-4">
                            <label htmlFor="" className='text-xl'>Enter Email : </label>
                            <input type="email" className="my-2 w-full h-11 border rounded pl-2" name='email' required placeholder='Enter Email Address' />
                        </div>
                        <div className="my-4">
                            <label htmlFor="" className='text-xl'>Enter Password : </label>
                            <input type="password" className="my-2 w-full h-11 border rounded pl-2" name='password' required placeholder='Enter Password'/>
                        </div>
                        <div className="my-4">
                            <button type="submit" className="w-1/2 h-12 border border-blue-500 rounded text-blue-500 duration-500 hover:text-white hover:bg-blue-500">Register</button>
                        </div>
                    </form>
                    <p>Already have an Account ?
                        <Link to={'/'}>
                            <span className="pl-2 text-blue-500">SignIn</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp