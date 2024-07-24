import React from 'react';

function Login(props) {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg bg-gray-400 drop-shadow-lg">
                <h1 className="text-2xl font-semibold text-center text-white mb-8"><span className='text-black mr-2'>Chatter</span>Login</h1>
                <form action="" className='m-4 backdrop-blur-md text-black'>
                    
                    <input type="text" placeholder='username' name='username' className='bg-white mb-4 text-center rounded-md h-10 p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 w-full '/>
                    <input type="password" placeholder='password' name='password' className='bg-white mb-4 text-center rounded-md h-10 p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 w-full '/>
                    <button className='btn w-full btn-accent'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;