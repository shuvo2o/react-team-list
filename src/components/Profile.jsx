import React from 'react';

const Profile = ({name,designation,image}) => {
    return (
        <div>
              <div className='bg-white shadow-md rounded-lg p-4 hover:bg-blue-300 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring ring-rose-500 cursor-pointer border-gray-300'>
    <img src={image} className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' alt="" />
    <h2 className='text-xl font-semibold text-gray-800 text-center'>{name}</h2>
    <p className='text-center text-gray-600'>{designation}</p>
  </div>
        </div>
    );
};

export default Profile;