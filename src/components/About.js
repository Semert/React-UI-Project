import React, { useEffect } from "react";
import about from "./about.png";
import araba from "./araba.png";
import arababg from "./arababg.png";
import Aos from "aos";
import "aos/dist/aos.css"

import "./About.css";

function About() {
  useEffect(()=> {
    Aos.init({ duration:2000});
}, [])
  return (
    <div className="about">
      <img src={about} alt="about" />

      <div>
        <h1 data-aos="fade-down" className="about-title">OTELİMİZ HAKKINDA</h1>
      </div>

      <div className="container">
        <div data-aos="fade-right" className="left">
          <p className="p-tag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget, hendrerit consequat sem. Nam
            vehicula blandit elementum. Aenean ut libero id tortor porta
            facilisis ut eu erat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Maecenas sagittis sagittis ante in faucibus. Sed
            eu erat vitae nulla elementum rhoncus sit amet at orci. Aenean
            varius, metus in mattis ultricies, nibh ex blandit velit, sed mollis
            justo est sit amet dui. Nullam vel urna in augue pellentesque
            suscipit consectetur a mi. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
          <p className="p-tag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget, hendrerit consequat sem. Nam
            vehicula blandit elementum. Aenean ut libero id tortor porta
            facilisis ut eu erat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Maecenas sagittis sagittis ante in faucibus. Sed
            eu erat vitae nulla elementum rhoncus sit amet at orci. Aenean
            varius, metus in mattis ultricies, nibh ex blandit velit, sed mollis
            justo est sit amet dui. Nullam vel urna in augue pellentesque
            suscipit consectetur a mi. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
          <p className="p-tag">
            Pellentesque cursus nulla in sodales faucibus. Ut finibus lacus nec
            justo tincidunt posuere. Nam posuere porta feugiat. Cras ultrices
            enim at risus dictum, vitae suscipit lorem bibendum. Cras ornare
            viverra dictum. Phasellus convallis ipsum vel purus scelerisque
            iaculis.
          </p>
        </div>

        <div data-aos="fade-left" className="right">
          <img src={araba} alt="araba" />{" "}
          <img src={arababg} alt="araba" className="bg" />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
