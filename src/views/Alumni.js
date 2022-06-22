import React, { useRef, useEffect, useState } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/alumni.svg"
import SideNavBar from "../components/sideNavBar";
import Card from "../components/Card";

const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  

const Alumni = () => {

  const [names, setNames] = useState(
    [
      {text: "What is Alumni Outreach?", tab: false, isbold: false, cont : (<Card />)},
      {text: "College", tab: false, isbold: true,  cont : (<p>Text about Guides</p>)},
      {text: "Community College", tab: true, isbold: false, cont : (<p>Text about Family</p>)},
      {text: "Four-Year", tab: true, isbold: false, cont : (<p>Text about Identify</p>)},
      {text: "ROTC", tab: true, isbold: false, cont : (<p>Text about Mental Health</p>)},
      {text: "Other", tab: true, isbold: false, cont : (<p>Text about Neurodiversity</p>)},
      {text: "Career", tab: false, isbold: true, cont : (<p>Text about Sexual Assault</p>)},
      {text: "Career Path", tab: true, isbold: false, cont : (<p>Text about Sexual Education</p>)},
      {text: "Major", tab: true, isbold: false, cont : (<p>Text about Sexual Education</p>)},
      {text: "Other", tab: false, isbold: true, cont : (<p>Text about Sexual Education</p>)},
      {text: "Alphabetical", tab: true, isbold: false, cont : (<p>Text about Sexual Education</p>)},
      {text: "Graduation Year", tab: true, isbold: false, cont : (<p>Text about Sexual Education</p>)}
  ])

  return (
    <>
      <FeaturesSplit bottomDivider title = "Alumni" description = "Get info from past EVHS students" caption = "Past EVHS Students" invertMobile topDivider imageFill className="illustration-section-01" imageUrl = {headerImage}/>
      <GenericSection style = {{display:"flex"}}>
        <SideNavBar sideTitles = {names} />
      </GenericSection>
    </>
  );
}

export default Alumni;