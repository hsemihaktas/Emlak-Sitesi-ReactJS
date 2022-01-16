import React from 'react'
import AllEstate from './AllEstate';
import Navbar from "./Navbar";
import Slider from "./Slider";


export default function Anasayfa() {
    return (
        <div>
            <Navbar/>
            <div className="top container">
                <Slider/>
            </div>
            <div className=" container">
                <h5 className="midText">Tüm İlanlar</h5>
                <AllEstate/>
            </div>
        </div>
    )
}

