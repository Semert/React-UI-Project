import React from 'react'
import katman from "./Resim/katman.png";
import rate from "./Resim/rate.png";

import "./Katman.css";


function Katman() {
    return (
        <div className="katman" >
                  <img className="katman-img" src={katman} alt="katman" />

                <div className="rate-hidden"> 
                  <img className="katman-rate" src={rate} alt="rate" />
                  <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                    magna, laoreet in nibh eget. </p>
                  </div>

            <div className="katman-title">
                <h1> HANGİ MEVSİMDE HANGİ AKTİVİTE?</h1>
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                    magna, laoreet in nibh eget.
                </p>
                 <p> Hendrerit consequat sem. Nam vehicula blandit elementum</p>
            </div>

        </div>
    )
}

export default Katman
