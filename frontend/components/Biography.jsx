import React from "react";
import "./Cards.css"
const Biography = ({imageUrl}) => {
 const cards = [
      { image: '/amit.jpg', name: 'Amit prasad sahoo (Leader)' },
      { image: '/rishi.jpg', name: 'Sthita Prangya Nayak' },
      { image: '/manab.jpg', name: 'Manab Mallick' },
      { image: '/ashu.jpg', name: 'Ashutosh Mohanty' },
      { image: '/raja.jpg', name: 'Biranchi Narayan Panda' },
      { image: '/deep.jpg', name: 'Deep Karar' },
    ];
  
 
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are 🩺</h3>
          <p>
          We are a team of passionate developers and innovators committed to bridging the gap between patients and healthcare providers.👨‍⚕️
          <div className="small-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="small-card">
          <div className="circle-image">
            <img src={card.image} alt={`Image ${index + 1}`} />
          </div>
          <div className="name">{card.name}</div>
        </div>
      ))}
    </div>
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.🖥️</p>
          <p>
          🚀 Our platform is designed with you in mind. We prioritize user experience, making it effortless for you to navigate and utilize our features.Our platform is designed with you in mind. We adhere to strict data protection protocols to safeguard your personal information at every step of the journey.🚀
          </p>
          <p>"From Couch to Clinic: Where Scheduling Doctor Appointments Feels as Easy as Netflix Binging!"</p>
          <p>Coding is fun! 😇</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
