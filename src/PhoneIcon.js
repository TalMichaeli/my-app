// PhoneIcon.js
import React from 'react';
import telephoneIcon from './assets/telephone.png';

const PhoneIcon = () => {
  const phoneNumber = "+972524781255"; // מספר הטלפון שלך

  return (
    <a
      href={`tel:${phoneNumber}`}  // כפתור מתקשר
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '80px', // מרחק מה-WhatsApp, תוכל לשנות
        backgroundColor: '#007AFF', // כחול כמו iOS או צבע אחר
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img 
        src={telephoneIcon}
        alt="Phone Icon" 
        style={{ width: '40px', height: '40px' }}
      />
    </a>
  );
};

export default PhoneIcon;
