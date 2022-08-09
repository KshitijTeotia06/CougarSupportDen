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
import raw from "raw.macro";
import seaBan from "../assets/banners/seaBan.PNG"



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

  const csv2json = (str, delimiter = ',') => {
    str = str.trim();
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n')).split('\n');
    for(let i = 0; i < rows.length; i++){
      rows[i] = rows[i].trim();
    }
    for(let i = 0; i < titles.length; i++){
      titles[i] = titles[i].trim();
    }

    return rows.map(row => {
      const values = row.split(delimiter);
      return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
  };

  const [names, setNames] = useState(
    [
      {text: "What is SEA?", tab: false, isbold: false, cont : "Text about SEA"},
      {text: "Guides", tab: false, isbold: true,  cont : "Text about Guides"},
      {text: "Family & Relationships", tab: true, isbold: false, cont : "Text about SEA"},
      {text: "Identity & Intersectionality", tab: true, isbold: false, cont : "Text about SEA"},
      {text: "Mental Health", tab: true, isbold: false, cont : "Text about SEA"},
      {text: "Neurodiversity", tab: true, isbold: false, cont : "Text about SEA"},
      {text: "Sexual Assault + Trauma", tab: true, isbold: false, cont : "Text about SEA"},
      {text: "Sexual Education", tab: true, isbold: false, cont : "Text about SEA"}
  ])

  const { convertCSVToArray } = require('convert-csv-to-array');
  const converter = require('convert-csv-to-array');
  const csv = raw("../data/SEA.csv");
  const array = csv2json(csv);
  array.shift();
  console.log(array);
  // console.log(csv);
  // const getData = convertCSVToArray(csv, {
  //   header: false,
  //   type: 'object',
  //   separator: ',', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
  // });
  // console.log(getData)

  return ( 
    <>
      {/* <FeaturesSplit bottomDivider title = "SEA" description = "Self Education Awareness" caption = "Free for everyone" className="illustration-section-01 has-bottom-divider invertMobile topDivider imageFill" imageUrl = {headerImage}/> */}
      <GenericSection>
        <img src={seaBan} style = {{marginTop: "-70px", width: "80%", marginLeft: "auto", marginRight: "auto"}}alt="Logo" />
      </GenericSection>
      <GenericSection style = {{display:"flex"}}>
        {/* <div style = {{float: "left"}}> */}
          <SideNavBar sideTitles = {array} />
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