import React, {useState}from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

export default function IlanEkleme() {

      var [ilan_ismi,setIlan_isim]=useState("");
      var [ilan_fiyatı,setIlan_fiyat]=useState("");
      var [ilan_özellikleri,setIlan_özellik]=useState("");
      var [ilan_şehir,setIlan_şehir]=useState("");
      var [ilan_satışTürü,setIlan_satışTürü]=useState("");
      var [ilan_aktiflik,setIlan_aktiflik]=useState("");

      var [message,setMessage]=useState("")
  
      const add = (e) => {
          e.preventDefault();
          //Check for the Name TextInput
          if (!ilan_ismi.trim() || !ilan_fiyatı.trim() || !ilan_özellikleri.trim() || !ilan_şehir.trim() || !ilan_satışTürü.trim() || !ilan_aktiflik.trim()) {
            setMessage('Lütfen boş alan bırakmayınız!')
            return;
          }
          else{
            addIlan();
            setMessage('Başarılı bir şekilde eklendi!')
          }
        };
        const addIlan= ()=>{
          Axios.post('http://localhost:3001/create/ilan',{ilan_ismi:ilan_ismi,ilan_fiyatı:ilan_fiyatı,ilan_özellikleri:ilan_özellikleri,ilan_şehir:ilan_şehir,ilan_satışTürü:ilan_satışTürü,ilan_aktiflik:ilan_aktiflik})
      }
    return (
        <div>
          <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">İlan Ekleme</h5>
                <h5 className="message">{message}</h5>
                <div className="company-or-personal-card">
                    <form>
                        <h5>İlan İsmi</h5><input type="text" className="text" onChange={(event)=>{ setIlan_isim(event.target.value) }}></input>
                        <h5>İlan Fiyatı</h5><input type="number" className="text" onChange={(event)=>{ setIlan_fiyat(event.target.value) }}></input>
                        <h5>İlan Özellikleri</h5><input type="text" className="text" onChange={(event)=>{ setIlan_özellik(event.target.value) }}></input>
                        <h5>İlan Şehir</h5><select className="select" onChange={(event)=>{ setIlan_şehir(event.target.value) }}>
                            <option>-</option>
                            <option value="İstanbul">İstanbul</option>
                            <option value="Ankara">Ankara</option>
                        </select>
                        
                        <h5>İlan Satış Türü</h5><select className="select" onChange={(event)=>{ setIlan_satışTürü(event.target.value) }}>
                            <option>-</option>
                            <option value="Kiralık">Kiralık</option>
                            <option value="Satılık">Satılık</option>
                        </select>
                        <h5>İlan Aktiflik Türü</h5><select className="select" onChange={(event)=>{ setIlan_aktiflik(event.target.value) }}>
                            <option>-</option>
                            <option value="Aktif">Aktif</option>
                            <option value="Pasif">Pasif</option>
                        </select>   
                    </form>
                <button className="button" onClick={add}>Ekle</button>
                </div>
            </div>
        </div>
    )
}
