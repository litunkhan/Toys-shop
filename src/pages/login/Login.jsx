/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../assets/143135-login-page-animation.json'

const Login = () => {
    return (
     
       
    <div className="flex flex-col relative  items-center justify-center min-h-screen bg-gray-100">
     <div className='absolute'> <Lottie   animationData={animation} loop={true} /></div>
        <div  className="bg-white absolute shadow-lg rounded-lg px-8 py-10 w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
                name='email'
                className="w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                name='password'
                className="w-full bg-transparent outline-none"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full">
              Login
            </button>
          </form>
          <div className="flex items-center mt-6">
            <div className="flex-grow border-t-2 border-gray-300"></div>
            <p className="mx-4 text-gray-500">Or</p>
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>
          <button className="flex items-center bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mt-6 w-full">
            <FaGoogle className="text-white mr-2" />
            Sign in with Google
          </button>
          <p className="text-center mt-4">
            Dont have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      
    );
};

export default Login;


