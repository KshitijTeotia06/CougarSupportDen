import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeader from '../components/sections/partials/SectionHeader';
import featureImage from "../assets/images/features-split-image-01.png"

const sectionHeader = {
  title: 'Workflow that just works',
  paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
};

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles className="center-content has-top-divider features-split-inner section-inner split-wrap container"/>
      <SectionHeader data={sectionHeader} className="center-content has-top-divider features-split-inner section-inner split-wrap container" />
      {/* <FeaturesSplit title = "test" description = "test" caption = "test" invertMobile topDivider imageFill className="illustration-section-02" imageUrl = "../assets/images/features-split-image-01.png" imageUrl = {featureImage}/> */}
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;