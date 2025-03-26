import React from "react";

const CategoryCard = ({ icon, label }) => {
  return (
    
         <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
      <img src={icon} alt={label} className="w-18 h-18 mb-2" />
      <p className="text-black font-bold" style={{
              fontFamily: 'BigNoodleTitling',
              lineHeight: '1.2',
              wordSpacing: '0.1em',
              fontWeight: '100',
              letterSpacing: '0.05em',
            }}>{label}</p>
    </div>
    
   
  );
};

export default CategoryCard;
