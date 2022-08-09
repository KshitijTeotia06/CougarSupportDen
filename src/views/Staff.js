import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/staffSVG.svg"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import staffBan from "../assets/banners/staffBan.png"

const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  

const Staff = () => {

  return (
    <>
      {/* <FeaturesSplit bottomDivider title = "Staff" description = "Learn More about our staff" caption = "EVHS" invertMobile topDivider imageFill className="illustration-section-01" imageUrl = {headerImage}/> */}
      <GenericSection>
        <img src={staffBan} style = {{marginTop: "-70px", width: "80%", marginLeft: "auto", marginRight: "auto"}}alt="Logo" />
      </GenericSection>
    </>
  );
}

export default Staff;