import React from 'react'
import Navbar from "./Navbar";
import SatılıkEstate from './SatılıkEstate';

export default function Satılık() {
    return (
        <div>
            <Navbar/>
            <div className="top container">
                <h5 className="midText">Satılık İlanlar</h5>
                <SatılıkEstate/>
            </div>
        </div>
    )
}

