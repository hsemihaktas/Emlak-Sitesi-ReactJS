import React, {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import Slider from "./Slider";
import Axios from 'axios'

function Ilan() {

    var [valueList,setValueList]=useState([]);

    const {ilan_id}=useParams();

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/ilan/${ilan_id}}`).then((response)=>{
      setValueList(response.data)
        });
    },[]);

    return (
        <div>
        <Navbar/>
        <div className="top flex">
            <div className="w-75">
                <Slider/>
            </div>
            <div className="ilan-yazi">
                {valueList.map((val)=>{
                        return(
                            <div>
                                <h3>İsmi: {val.ilan_ismi}</h3><hr/>
                                <h3>Fiyatı: {val.ilan_fiyatı}</h3><hr/>
                                <h3>Özellikleri: {val.ilan_özellikleri}</h3><hr/>
                                <h3>Yeri: {val.ilan_şehir}</h3><hr/>
                                <h3>Satış Türü: {val.ilan_satışTürü}</h3><hr/>
                            </div>
                        )        
                })}
                </div>
            </div>
        </div>
    )
}

export default Ilan
