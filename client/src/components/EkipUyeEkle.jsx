import React, { useState } from 'react'
import Axios from 'axios'
import Sidebar from "./Sidebar";

function EkipUyeEkle() {

    var [ekip_isim,setEkip_isim]=useState("");
    var [ekip_soyisim,setEkip_soyisim]=useState("");
    var [ekip_görev,setEkip_görev]=useState("");
    var [ekip_github,setEkip_github]=useState("");
    var [ekip_linkedin,setEkip_linkedin]=useState("");
    var [ekip_mail,setEkip_mail]=useState("");

    var [message,setMessage]=useState("");

    const add = (e) => {
        e.preventDefault();
        //Check for the Name TextInput
        if (!ekip_isim.trim() || !ekip_soyisim.trim() || !ekip_görev.trim() || !ekip_github.trim() || !ekip_linkedin.trim() || !ekip_mail.trim()) {
          setMessage('Lütfen boş alan bırakmayınız!')
          return;
        }
        else{
          addEkip();
          setMessage('Başarılı bir şekilde eklendi!')
        }
      };
      const addEkip = ()=>{
        Axios.post('http://localhost:3001/create/ekip',{ekip_isim:ekip_isim,ekip_soyisim:ekip_soyisim,ekip_görev:ekip_görev,ekip_github:ekip_github,ekip_linkedin:ekip_linkedin,ekip_mail:ekip_mail})
    }

    return (
        <div>
            <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">Ekibe Kişi Ekleme</h5>
                <h5 className="message">{message}</h5>
                <div className="company-or-personal-card">
                  <form>
                    <h5>Kişinin İsmi</h5><input type="text" className="text" onChange={(event)=>{ setEkip_isim(event.target.value) }}></input>
                    <h5>Kişinin Soyisim</h5><input type="text" className="text" onChange={(event)=>{ setEkip_soyisim(event.target.value) }}></input>
                    <h5>Kişinin Görevi</h5><input type="text" className="text" onChange={(event)=>{ setEkip_görev(event.target.value) }}></input>
                    <h5>Kişinin Github Hesabı</h5><input type="text" className="text" onChange={(event)=>{ setEkip_github(event.target.value) }}></input>   
                    <h5>Kişinin Linkedin Hesabı</h5><input type="text" className="text" onChange={(event)=>{ setEkip_linkedin(event.target.value) }}></input>
                    <h5>Kişinin Mail Hesabı</h5><input type="text" className="text" onChange={(event)=>{ setEkip_mail(event.target.value) }}></input> 
                  </form>
                <button className="button" onClick={add}>Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default EkipUyeEkle
