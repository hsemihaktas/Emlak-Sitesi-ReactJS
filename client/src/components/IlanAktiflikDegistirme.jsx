import React, {useEffect, useState}from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

function IlanAktiflikDuzenle() {

    var [valueList,setValueList]=useState([])
    var [newIlan_aktiflik,setNewIlan_aktiflik]=useState("")
    var [message,setMessage]=useState("")

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get`).then((response)=>{
      setValueList(response.data)
        });
    },[valueList]);

    const updateAktiflik = (ilan_id,ilan_aktiflik) =>{
        if (!newIlan_aktiflik.trim()) {
            setMessage('Lütfen boş alan bırakmayınız!')
            return;
        }
        else if(newIlan_aktiflik===ilan_aktiflik){
            setMessage('Lütfen aynı durumu seçmeyiniz!')
        }
        else{
            setMessage('')
            Axios.put(`http://localhost:3001/update/ilan`,{ilan_aktiflik:newIlan_aktiflik,ilan_id:ilan_id})  
            setMessage('Başarılı şekilde değiştirildi!')
             
        }
    }

    return (
        <div>
            <Sidebar/>
                <div className="content p-5">
                <h5 className="adminAlert">İlan Aktiflik Değiştirme</h5>
                <h5 className="message">{message}</h5>
                <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
                {valueList.map((val)=>{
                    var id=val.ilan_id
                return(
                    <div className="col">
                        <div className="company-or-personal-card">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>{val.ilan_ismi}-{val.ilan_aktiflik}</h5> 
                                <select className="select" id={id} onChange={(event)=>{setNewIlan_aktiflik(event.target.value)}} >
                                    <option>İlan Aktifliğini Değiştirmek için Lütfen Seç</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Pasif">Pasif</option>
                                </select>   
                                <button className="button" id={id} onClick={()=>{updateAktiflik(val.ilan_id,val.ilan_aktiflik)}}>Değiştir</button>
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

export default IlanAktiflikDuzenle
