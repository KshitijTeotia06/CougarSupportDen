import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/SEAImage.svg"
import SideNavBar from "../components/sideNavBar"

const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  

const SEA = () => {

  return (
    <>
      <FeaturesSplit bottomDivider title = "SEA" description = "Self Education Awareness" caption = "Free for everyone" className="illustration-section-01 has-bottom-divider invertMobile topDivider imageFill" imageUrl = {headerImage}/>
      <GenericSection>
        <SideNavBar />
      </GenericSection>
    </>
  );
}

export default SEA;