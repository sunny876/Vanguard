import React from 'react';

export const HeaderLogo: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      width: '100%',
      padding: '20px 0'
    }}>
      <img 
        src={process.env.PUBLIC_URL + '/Vanguard.png'} 
        alt="Vanguard" 
        style={{ 
          height: "40px", 
          width: "auto",
          objectFit: "contain",
          maxWidth: "100%"
        }} 
      />
    </div>
  );
};
