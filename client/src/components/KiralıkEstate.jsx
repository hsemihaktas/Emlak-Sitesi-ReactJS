import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Image from '../images/Ilan_Resmi.jpg'
import {Link} from 'react-router-dom';

export default function KiralıkEstate() {

    var [valueList,setValueList]=useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/kiralik`).then((response)=>{
      setValueList(response.data)
    });
},[]);

    return (
        <div>
            {valueList.map((val)=>{
            return(
                <div className="estate-card" >
                    <div className="row ">
                        <div className="col-md-4 resim" >       
                            <img src={Image} className="company-or-personal-image" alt="..." ></img>
                            <p className="resim-yazi">{val.ilan_ismi}</p>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>İsmi: {val.ilan_ismi}</h5>  
                                <h5>Fiyatı: {val.ilan_fiyatı}</h5>
                                <h5>Yeri: {val.ilan_şehir} / {val.ilan_ilçe}</h5>
                                <h5>Satış Türü: {val.ilan_satışTürü}</h5>  
                                <Link to={'/'+ val.ilan_id}><button id={`${val.ilan_id}`} className="button">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
            })}
        </div>
    )
}

