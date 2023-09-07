import React from 'react';

const ProfileInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));



    return (
        <div className="hero min-h-screen font-mono ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={userInfo[3]} className="max-w-sm rounded-2xl shadow-2xl ml-8" />
                <div>
                    <h1 className="text-3xl uppercase font-bold">{userInfo[1]}</h1>
                    <p className="py-6">User Name: {userInfo[2]}</p>
                    <p className="py-6">Email: {userInfo[0]}</p>
                    <p className="py-6">Bio: {userInfo[4]}</p>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;