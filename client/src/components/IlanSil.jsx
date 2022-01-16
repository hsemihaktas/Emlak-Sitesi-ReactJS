import React, {useEffect, useState}from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

function IlanSil() {

    var [valueList,setValueList]=useState([])

    var [message,setMessage]=useState("")

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get`).then((response)=>{
      setValueList(response.data)
        });
    },[]);

    const deleteIlan = (ilan_id) =>{
        Axios.delete(`http://localhost:3001/delete/ilan/${ilan_id}`).then((response)=>{
            setValueList(valueList.filter((val)=>{
                return val.ilan_id !== ilan_id
            }))
        })
        setMessage('Başarılı bir şekilde silindi!')
    }

    return (
        <div>
            <Sidebar/>
                <div className="content p-5">
                <h5 className="adminAlert">İlan Silme</h5>
                <h5 className="message">{message}</h5>
                <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
                {valueList.map((val)=>{
                    var id=val.ilan_id
                return(
                    <div className="col">
                        <div className="company-or-personal-card">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>{val.ilan_ismi}-{val.ilan_aktiflik}</h5> 
                                <button className="button" id={id} onClick={()=>{deleteIlan(val.ilan_id)}}>Sil</button>
                            </div>
                        </div>
                    </div>    
                ) 
                })}
            </div>
            </div>
        </div>
    )
}

export default IlanSil
