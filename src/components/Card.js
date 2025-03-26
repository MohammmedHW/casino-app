import React from 'react';
import crown from '../assets/images/crown.png';
const Card = ({ rating, bgImage }) => {
    return (
        <div className="relative bg-white rounded-3xl shadow-lg w-48">

            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white w-12 h-12 rounded-full border-4 border-black z-10 flex items-center justify-center" style={{ boxShadow: 'inset 0 0 0 3px red' }}>
                <img src={crown} alt="Crown" className="w-6 h-6" />
            </div>

            {/* Dynamic background image */}
            <div
                className="mt-10 text-white text-center py-7 font-bold text-xl"
                style={{
                    backgroundImage: `url(${bgImage})`, 
                    backgroundSize: 'cover',            
                    backgroundPosition: 'center'        
                }}
            >
                
            </div>

            <div className="flex justify-between mt-5 items-center px-4 py-4">
                <div className="flex items-center">
                    <span className="text-orange-500 text-2xl">★</span>
                    <span className="ml-2 text-xl text-gray-600">{rating}</span>
                </div>
                <span className="text-gray-500">Read Review</span>
            </div>

            <div className="bg-red-600 mx-5 mb-3 text-white py-2 text-lg rounded-lg hover:bg-red-700 transition-colors duration-300">
                Play Now
            </div>
        </div>

    );
};

export default Card;
