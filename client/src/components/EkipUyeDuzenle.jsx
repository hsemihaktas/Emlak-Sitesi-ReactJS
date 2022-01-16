import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Sidebar from "./Sidebar";

function EkipUyeDuzenle() {
    var [valueList,setValueList]=useState([])

    var [newEkip_isim,setNewEkip_isim]=useState("")
    var [newEkip_soyisim,setNewEkip_soyisim]=useState("")
    var [newEkip_görev,setNewEkip_görev]=useState("")
    var [newEkip_github,setNewEkip_github]=useState("")
    var [newEkip_linkedin,setNewEkip_linkedin]=useState("")
    var [newEkip_mail,setNewEkip_mail]=useState("")

    var isim = useState([])
    var soyisim = useState([])
    var görev = useState([])
    var github = useState([])
    var linkedin = useState([])
    var mail = useState([])

    var [message,setMessage]=useState("")

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/Ekip`).then((response)=>{
      setValueList(response.data)
    }); 
},[valueList]);

    const ekipGüncelle = (ekip_id) =>{
        if(newEkip_isim.trim())isim[ekip_id]=newEkip_isim
        if(newEkip_soyisim.trim())soyisim[ekip_id]=newEkip_soyisim
        if(newEkip_görev.trim())görev[ekip_id]=newEkip_görev
        if(newEkip_github.trim())github[ekip_id]=newEkip_github
        if(newEkip_linkedin.trim())linkedin[ekip_id]=newEkip_linkedin
        if(newEkip_mail.trim())mail[ekip_id]=newEkip_mail

        if (!newEkip_isim.trim() && !newEkip_soyisim.trim() && !newEkip_görev.trim() && !newEkip_github.trim() && !newEkip_linkedin.trim() ) {
            setMessage('Lütfen bir tane alana yazınız!')
            return;
        }
        else{
            Axios.put(`http://localhost:3001/update/ekip`,{ekip_isim:isim[ekip_id],ekip_soyisim:soyisim[ekip_id],ekip_görev:görev[ekip_id],ekip_github:github[ekip_id],ekip_linkedin:linkedin[ekip_id],ekip_mail:mail[ekip_id],ekip_id:ekip_id})
            setMessage('Başarılı Bir Şekilde Değiştirildi!')
        }
    }
    return (
        <div>
            <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">Ekip Üye Düzenle</h5>
                <h5 className="message">{message}</h5>
                <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
                {valueList.map((val)=>{
                    isim[val.ekip_id] = val.ekip_isim
                    soyisim[val.ekip_id] = val.ekip_soyisim
                    görev[val.ekip_id] = val.ekip_görev
                    github[val.ekip_id] = val.ekip_github
                    linkedin[val.ekip_id] = val.ekip_linkedin
                    mail[val.ekip_id] = val.ekip_mail
                return(
                    <div className="col">
                        <div className="company-or-personal-card">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>{val.ekip_isim} {val.ekip_soyisim}</h5>  
                                <h5><input type="text" id={`isim${val.ekip_id}`} placeholder="İsmini Yazınız" onChange={(event)=>{setNewEkip_isim(event.target.value)}}></input></h5>
                                <h5><input type="text" id={`soyisim${val.ekip_id}`} placeholder="Soyismini Yazınız" onChange={(event)=>{setNewEkip_soyisim(event.target.value)}}></input></h5>
                                <h5><input type="text" id={`görev${val.ekip_id}`} placeholder="Görevini Yazınız" onChange={(event)=>{setNewEkip_görev(event.target.value)}}></input></h5>
                                <h5><input type="text" id={`github${val.ekip_id}`} placeholder="Github Hesabını Yazınız" onChange={(event)=>{setNewEkip_github(event.target.value)}}></input></h5>
                                <h5><input type="text" id={`linkedin${val.ekip_id}`} placeholder="Linkedin Hesabını Yazınız" onChange={(event)=>{setNewEkip_linkedin(event.target.value)}}></input></h5>
                                <h5><input type="text" id={`mail${val.ekip_id}`} placeholder="Mail Hesabını Yazınız" onChange={(event)=>{setNewEkip_mail(event.target.value)}}></input></h5>
                                <button className="button" id={`button${val.ekip_id}`} onClick={()=>{ekipGüncelle(val.ekip_id)}}>Güncelle</button>
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

export default EkipUyeDuzenle
