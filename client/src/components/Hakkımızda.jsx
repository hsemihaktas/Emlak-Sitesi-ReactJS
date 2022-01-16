import React from 'react'
import Ekip from './Ekip'
import Navbar from './Navbar'
import Sirket from './Sirket'

function Hakkımızda() {
    return (
        <div>
            <Navbar/>
            <div className="top container">
                <h5 className="midText">HAKKIMIZDA</h5>
                <Sirket/>
                <h5 className="midText top">Ekip Üyeleri </h5>
                <Ekip/>
            </div>
        </div>
    )
}

export default Hakkımızda
