import React from 'react';
import './HomePage.css';
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import ThreeColumnSection from '../ThreeColumnSection/ThreeColumnSection'
import CalloutSection from '../CalloutSection/CalloutSection'
import Footer from '../Footer/Footer'
import Template_rb from '../Template_rb/Template_rb';
import Form from '../Form/Form';



function HomePage() {
  return (
    <div className="HomePage">
      <Header />  
      <MainSection />
      <ThreeColumnSection />
      <div className="extra"></div>
      <CalloutSection />
      <Footer />
      {/* <Form /> */}
    </div>
  );
}

export default HomePage;
