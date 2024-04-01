
import React from "react";
import image from '../assets/logo512.png';

const card = () =>{
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
            <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-lg  ">
                <img className="h-24 mx-auto rounded-full  ring-4 ring-blue-400 p-1" src={image}></img>
                <div className="mt-2">
                    <div className="space-y-0">
                        <p className="text-lg font-semibold text-black">Md Tarek Hossain Tusher</p>
                        <p className="text-gray-600 font-medium">Software Engineer</p>
                    </div>
                    <button className="mt-4 px-4 py-1 border border-purple-200 rounded-full text-sm text-blue-600">See Profile</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default card;