/* eslint-disable */
import { Component, useEffect } from 'react';
// import { AppProps } from 'next/app';
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import SiteLayout from '../layouts/SiteLayout';
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/style.scss";

// import '../../node_modules/aos/src/sass/aos.scss';

const getLayout = (Component.getLayout || (page => <SiteLayout children={page} />))

const progress = new ProgressBar({
  size: 4,
  color: "#00843D",
  className: "z-50",
  delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function MyApp({ Component, pageProps }){
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }, []);
  return getLayout (<Component {...pageProps} />);
}
