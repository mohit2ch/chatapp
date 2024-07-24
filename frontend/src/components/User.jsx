import React from 'react';

function User({fullname, profile}) {
    return (
        <button className='h-20 p-3 w-full flex items-center  hover:bg-slate-700 cursor-pointer text-white bg-slate-600 border-transparent no-animation'>
            <img class="h-10 w-10 rounded-full m-4" src={profile} alt="" />
            <h2>{fullname}</h2>
        </button>
    );
}

export default User;