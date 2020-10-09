import React from 'react'
import "./Map.css"
import logos from "./Resim/logos.png"
import map from "./Resim/map.png"


function Map() {
    return (
        <div className="map">
            <img className="maps" src={map} alt="logos"/>

                <div className="maplogo"> 
            <img className="logos" src={logos} alt="logos"/>
            </div>
        </div>
    )
}

export default Map
