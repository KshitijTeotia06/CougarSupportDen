import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

import db from "./Firebase";
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import About from './views/About';
import Peer from "./views/Peer"
import Staff from "./views/Staff"
import SEA from "./views/SEA"
import Alumni from "./views/Alumni"
import { collection, onSnapshot } from 'firebase/firestore';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // const [seaTitles, setSEATitles] = useState([]);

  // useEffect (() => {
  //   onSnapshot(collection(db, "SEA"), (snapshot) => {
  //     setSEATitles(snapshot.docs.map(doc => doc.data()));
  //   });
  // });
  // console.log(seaTitles);

  return (
      

    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/peer" component={Peer} layout={LayoutDefault} />
          <AppRoute exact path="/staff" component={Staff} layout={LayoutDefault} />
          <AppRoute exact path="/alumni" component={Alumni} layout={LayoutDefault} />
          <AppRoute exact path="/sea" component={SEA} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;