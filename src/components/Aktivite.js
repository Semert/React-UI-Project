import React, { useEffect } from "react";
import aktivitebg from "./Aktivitebg..png";
import "./Aktivite.css";
import res1 from "./Resim/a1.png";
import res2 from "./Resim/a2.png";
import res3 from "./Resim/a3.png";
import res4 from "./Resim/a4.png";
import pink from "./Resim/pink.png";
import Aos from "aos";
import "aos/dist/aos.css"


function Aktivite() {
  useEffect(()=> {
    Aos.init({ duration:2000});
}, [])
  return (
    <div  className="aktivite">
      <img className="imageler" src={aktivitebg} alt="a" />

      <div  data-aos="fade-up" className="titles">
        <h1> AKTİVİTELER</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
          magna, laoreet in nibh eget.
        </p>
        <p> Hendrerit consequat sem. Nam vehicula blandit elementum</p>
      </div>

      <div data-aos="fade-up" className="containerler">
        <div  className="images">
          {" "}
          <img src={res1} alt="resim1" />
          <h5>KUŞ GÖÇLERİ</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget.
          </p>
        </div>

        <div className="images">
          {" "}
          <img src={res2} alt="resim1" />
          <h5>AYI TAKİBİ</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget.
          </p>
        </div>

        <div className="images">
          {" "}
          <img src={res3} alt="resim1" />
          <h5>AVCILIK</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget.
          </p>
        </div>

        <div  className="images">
          {" "}
          <img src={res4} alt="resim1" />
          <h5>DAĞ YÜRÜYÜŞÜ</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nulla magna, laoreet in nibh eget.
          </p>
        </div>
      </div>
      <div className="pink">
        <img src={pink} alt="pink" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
          magna, laoreet in nibh eget.
        </p>
      </div>
    </div>
  );
}

export default Aktivite;
