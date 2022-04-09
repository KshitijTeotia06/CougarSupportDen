import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/alumni.svg"

const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  

const Alumni = () => {

  return (
    <>
      <FeaturesSplit title = "Alumni" description = "Get info from past EVHS students" caption = "Past EVHS Students" invertMobile topDivider imageFill className="illustration-section-01" imageUrl = {headerImage}/>
    </>
  );
}

export default Alumni;