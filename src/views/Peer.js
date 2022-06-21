import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesSplitLeft from '../components/sections/FeaturesSplitLeft';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/alumni.svg"
import featureImage from "../assets/images/features-split-image-01.png"
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {useState} from "react";

const headerData = {
    title: 'Schedule An Appointment',
    paragraph: 'Choose a time that works for you'
};  

const footerData = {
  title: 'Title',
  paragraph: 'text'
};  

const Peer = () => {

  return (
    <>
      <FeaturesSplit bottomDivider title = "Peer Counseling" description = "Interact with fellow peers in order to have a good experience" caption = "Free for everyone" className="illustration-section-01 has-bottom-divider invertMobile topDivider imageFill" imageUrl = {headerImage}/>
      <FeaturesSplit title = "text" description = "text" caption = "Hello" invertMobile topDivider imageFill className="illustration-section-02" imageUrl = {featureImage}/>
      <FeaturesSplitLeft bottomDivider title = "text" description = "text" caption = "Hello" invertMobile topDivider imageFill className="illustration-section-02" imageUrl = {featureImage}/>
      <GenericSection>
        <SectionHeader  data={headerData} style={{textAlign: 'center'}} />
      </GenericSection>
      <GenericSection topDivider>
        <SectionHeader  data={footerData} style={{textAlign: 'center'}} />
        <div style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
          <Link to="#0" className="button button-primary button-wide-mobile button-sm">Learn More</Link>
        </div>
      </GenericSection>
    </>
  );
}

export default Peer;