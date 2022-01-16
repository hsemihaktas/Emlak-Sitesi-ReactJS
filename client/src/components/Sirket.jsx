import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Image from '../images/sirket.jpg'

export default function Sirket() {

    var [valueList,setValueList]=useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/sirket`).then((response)=>{
      setValueList(response.data)
    });
},[]);

    return (
        <div>
            {valueList.map((val)=>{
            return(
                <div className="company-or-personal-card" >
                    <div className="row ">
                        <div className="col-md-4">
                            <img src={Image} className="company-or-personal-image" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>Sirketin İsim: {val.sirket_adı}</h5>  
                                <h5>Sirketin Sektörü: {val.sirket_sektörü}</h5>
                                <h5>Sirketin Amacı: {val.sirket_amaci}</h5>  
                                <h5>Sirketin Adresi: {val.sirket_adresi}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
            })}
        </div>
    )
}

