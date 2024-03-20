import React from 'react';
import './HomePage.css';
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import ThreeColumnSection from '../ThreeColumnSection/ThreeColumnSection'
import CalloutSection from '../CalloutSection/CalloutSection'
import Footer from '../Footer/Footer'
import HeaderTemplate from '../../Utils/Header/HeaderTemplate';
import Template_rb from '../Template_rb/Template_rb';
import Form from '../Form/Form';



function HomePage() {
  return (
    <div className="HomePage">
      <Header />  
      {/* <HeaderTemplate /> */}
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
