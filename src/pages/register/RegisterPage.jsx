import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animation from '../../assets/143135-login-page-animation.json'

const RegisterPage = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen bg-gray-100">
         <div className='absolute'> <Lottie   animationData={animation} loop={true} /></div>
      <div className="bg-white absolute shadow-lg rounded-lg px-8 py-10 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <div className="flex items-center border rounded-md px-3 py-2">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Name"
              name='name'
              className="w-full bg-transparent outline-none"
            />
          </div>
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
          <div className="flex items-center border rounded-md px-3 py-2">
            <FaImage className="text-gray-400 mr-3" />
            <input
              type="url"
              placeholder="Photo URL"
              name='photo'
              className="w-full bg-transparent outline-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
