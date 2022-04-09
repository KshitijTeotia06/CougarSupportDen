import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";

const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  

const Home = () => {

  return (
    <GenericSection>
        
        <SectionHeader data={headerData} />
        // Section content
    </GenericSection>
  );
}

export default Home;