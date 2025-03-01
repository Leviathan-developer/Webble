import React, { useEffect } from "react";
import "./../assets/CSS/home.css";
import Navbar from "./Components/navbar";
import "font-awesome/css/font-awesome.min.css";
import Typed from "typed.js";
import About from "./Components/about";
import Services from "./Components/service"

const App = () => {
  useEffect(() => {
    // type js for doing animation
    const typed = new Typed(".typing", {
      strings: [
        "bringing students and teachers closer",
        "you with homework",
        "completing tasks efficiently",
        "collaborating with each other",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="leftside">
          <div className="topside">
            <h1 className="welcome">Welcome to Gurushala</h1>
            <h1 className="slogan">
              We help <span className="typing"></span>
            </h1>
            <div className="bottomside">
              <a href="/login" className="highclickables">
                Join us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <About/>
    </>
  );
};

export default App;
