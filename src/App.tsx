import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import { useAnimate } from "framer-motion";
import Stream from "./components/Stream";
import TrackList from "./components/TrackList";
import MusicVideo from "./components/MusicVideo";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [scope, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleWindowLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.overflowY = ""; // Reset the overflow property
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("load", handleWindowLoad);
    }, 500);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);
  const Animate = () => {
    if (isOpen === true) {
      setIsOpen(false);
      animate(scope.current, { x: 500 });
    }
    if (isOpen === false) {
      setIsOpen(true);
      animate(scope.current, { x: 0 });
    }
  };
  return (
    <>
      {isLoading && <LoadingScreen />}
      <SideBar Animate={Animate} scope={scope}></SideBar>
      <NavBar Animate={Animate}></NavBar>
      <Hero></Hero>
      <Stream></Stream>
      <TrackList></TrackList>
      <MusicVideo></MusicVideo>
      <Footer></Footer>
    </>
  );
}

export default App;
