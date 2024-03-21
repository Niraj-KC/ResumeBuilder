import React from 'react';
import './HomePage.css';
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import ThreeColumnSection from '../ThreeColumnSection/ThreeColumnSection'
import CalloutSection from '../CalloutSection/CalloutSection'
import Footer from '../Footer/Footer'
import HeaderTemplate from '../../Utils/HeaderTemplate/HeaderTemplate';
import Resume from '../Resume/Resume';




function HomePage() {
  return (
    <div className="HomePage">
      <Resume />
      {/* <Header />   */}
      {/* <MainSection /> */}
      {/* <ThreeColumnSection /> */}
      {/* <div className="extra"></div> */}
      {/* <CalloutSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
