import React from 'react'
import KiralıkEstate from './KiralıkEstate';
import Navbar from "./Navbar";

export default function Kiralık() {
    return (
        <div>
            <Navbar/>
            <div className="top container">
                <h5 className="midText">Kiralık İlanlar</h5>
                <KiralıkEstate/>
            </div>
        </div>
    )
}

