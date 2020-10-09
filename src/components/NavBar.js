import React, { useEffect } from "react";
import "./NavBar.css";
import header from "./header.png";
import hotel from "./Resim/hotel.png";

import Aos from "aos";
import "aos/dist/aos.css"

function NavBar() {
  useEffect(()=> {
    Aos.init({ duration:2000});
}, [])
  return (
    <>
      <div className="navbar">
      <span>   <img className="hotel"src={hotel} alt="Logo" /></span>
        <div className="navbar-container">
          <span>  </span>
          <ul className="list">
            <li>
              {" "}
              <div data-aos="flip-right" className="active"> Anasayfa</div>
            </li>
            <li>OTELİMİZ</li>
            <li>AKTİVİTELER</li>
            <li>YORUMLAR</li>
            <li>İLETİŞİM</li>

          </ul>
          <div className="navbar-hidden">Anasayfa</div>
        </div>

        <div className="header">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Hey merhaba! Hayatındaki en muhteşem tatil deneyimini yaşamaya ve gizemlerle dolu bu dünyaya girmeye ne dersin?
          </p>
          <button data-aos="fade-up">Otel Hakkında</button>
        </div>
        <img src={header} alt="header" />
      </div>
    </>
  );
}

export default NavBar;
