import React, { useRef, useEffect, useState } from 'react';

// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from "../components/sections/GenericSection";
import headerImage from "../assets/images/SEAImage.svg"
import SideNavBar from "../components/sideNavBar";
import db from "../Firebase";
import { collection, onSnapshot } from 'firebase/firestore';


const headerData = {
    title: 'Section title',
    paragraph: 'Section paragraph that can be longer.'
  };  



const SEA = () => {

  // const [names, setNames] = useState([]);

  // useEffect (() => {
  //   onSnapshot(collection(db, "SEA"), (snapshot) => {
  //     setNames(snapshot.docs.map(doc => doc.data()));
  //   });
  // });

  // names.sort((a, b) => (a.key > b.key ? 1 : -1));
  const [names, setNames] = useState(
    [
      {text: "What is SEA?", tab: false, isbold: false, cont : (<p>Text about SEA</p>)},
      {text: "Guides", tab: false, isbold: true,  cont : (<p>Text about Guides</p>)},
      {text: "Family & Relationships", tab: true, isbold: false, cont : (<p>Text about Family</p>)},
      {text: "Identity & Intersectionality", tab: true, isbold: false, cont : (<p>Text about Identify</p>)},
      {text: "Mental Health", tab: true, isbold: false, cont : (<p>Text about Mental Health</p>)},
      {text: "Neurodiversity", tab: true, isbold: false, cont : (<p>Text about Neurodiversity</p>)},
      {text: "Sexual Assault + Trauma", tab: true, isbold: false, cont : (<p>Text about Sexual Assault</p>)},
      {text: "Sexual Education", tab: true, isbold: false, cont : (<p>Text about Sexual Education</p>)}
  ])

  return ( 
    <>
      <FeaturesSplit bottomDivider title = "SEA" description = "Self Education Awareness" caption = "Free for everyone" className="illustration-section-01 has-bottom-divider invertMobile topDivider imageFill" imageUrl = {headerImage}/>
      <GenericSection style = {{display:"flex"}}>
        {/* <div style = {{float: "left"}}> */}
          <SideNavBar sideTitles = {names} />
        {/* </div> */}
        {/* <div style = {{float: "left", marginLeft: "50px", marginTop: "-50px"}}>
          <h1>TEXT</h1>
          <p>text</p>
        </div> */}
      </GenericSection>
    </>
  );
}

export default SEA;