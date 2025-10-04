
// src/LandingPage.js
import React from "react";
import "./LandingPage.css";
import WhatsAppIcon from "./WhatsAppIcon";
import logoLocksmit from './assets/logoLocksmit.png';
import PhoneIcon from "./PhoneIcon";

function LandingPage() {
  return (
    <div className="landing">
      {/* Header */}
   <header className="header">
  <img 
    src={logoLocksmit}
    alt="Yosy Locksmith Logo" 
    className="logo"
  />
  <div className="text">
    <h1>SOS יוסי מנעולן</h1>
    <p>מהיר • אמין • 24/6 זמין</p>
   {/* <div className="buttons">
      <a href="tel:+9727899570" className="btn call">📞 התקשר עכשיו</a>
    </div>*/}
  </div>
</header>


      {/* Services */}
       <section
      className="services"
      style={{
        backgroundImage: `url("https://shai-locksmith.co.il/wp-content/uploads/2019/01/ramat-hasharon-locksmith-service.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '60px 20px',
        borderRadius: '12px',
        color: 'white',
        margin: '0px 0',
      }}
    >
       <h2>🔑 השירות שלנו – מהיר, מקצועי ואמין</h2>
      
      <p>
        צוות מנעולנים זמין  24/6 לפתיחת דלתות, רכבים ומנעולים חכמים. מגיעים מהר, עובדים מקצועית ומבטיחים שתישארו בטוחים ושקטים.
      </p>
      
      <p>
        אנחנו מבינים שזמן וביטחון חשובים לכם. לכן אנו מספקים שירות אישי, מקצועי ואמין, עם צוות מיומן שמגיע במהירות ודואג לכל פרט קטן – כדי שתהיו רגועים ושקטים בכל מצב.
      </p>
      
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px', marginTop: '20px' }}>
        <li>🚪 פתיחת דלתות</li>
        <li>🔑 SOS מנעולן</li>
        <li>🚗 רכבים</li>
        <li>🏠 מנעול חכם לבית</li>
        <li>🛠️ תיקון והחלפת מנעולים</li>
        <li>🔒פתיחת כספות</li>
      </ul>
    </section>

      {/* Contact */}
      <section className="contact">
        <h2>צור קשר</h2>
        <p>טלפון📞: <a href="tel:0524781255">052-478-1255</a></p>
        <p> yosib858@gmail.com:📧 מייל</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Yosy Locksmith. All Rights Reserved.</p>
      </footer>
   <WhatsAppIcon></WhatsAppIcon>
   <PhoneIcon></PhoneIcon>
     </div>
  );
}

export default LandingPage;
