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

  const [names, setNames] = useState([]);

  useEffect (() => {
    onSnapshot(collection(db, "SEA"), (snapshot) => {
      setNames(snapshot.docs.map(doc => doc.data()));
    });
  });

  names.sort((a, b) => (a.key > b.key ? 1 : -1));
  // const [names, setNames] = useState(
  //   [
  //     {text: "test1", tab: false, isbold: true},
  //     {text: "test2", tab: true, isbold: false},
  // ])

  return ( 
    <>
      <FeaturesSplit bottomDivider title = "SEA" description = "Self Education Awareness" caption = "Free for everyone" className="illustration-section-01 has-bottom-divider invertMobile topDivider imageFill" imageUrl = {headerImage}/>
      <GenericSection style = {{display:"flex"}}>
        <div style = {{float: "left"}}>
          <SideNavBar sideTitles = {names} />
        </div>
        <div style = {{float: "left", marginLeft: "50px", marginTop: "-50px"}}>
          <h1>TEST</h1>
        </div>
      </GenericSection>
    </>
  );
}

export default SEA;