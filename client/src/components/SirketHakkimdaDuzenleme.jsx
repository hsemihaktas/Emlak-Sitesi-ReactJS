import React, {useState} from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

function SirketHakkimdaDuzenleme() {

    var[newSirket_adı,setNewSirket_adı]=useState("");
    var[newSirket_sektörü,setNewSirket_sektörü]=useState("");
    var[newSirket_amaci,setNewSirket_amaci]=useState("");
    var[newSirket_adresi,setNewSirket_adresi]=useState("");

    var[message,setMessage]=useState("")
    
    const update = (e) => {
        e.preventDefault();
        //Check for the Name TextInput
        if (!newSirket_adı.trim() || !newSirket_sektörü.trim() || !newSirket_amaci.trim() || !newSirket_adresi.trim()) {
          setMessage('Lütfen boş alan bırakmayınız!')
          return;
        }
        else{
          updateSirket();
          setMessage('Başarılı bir şekilde güncellendi!')
        }
      };

    const updateSirket = ()=>{
        Axios.put('http://localhost:3001/update/sirket',{sirket_adı:newSirket_adı, sirket_sektörü:newSirket_sektörü, sirket_amaci: newSirket_amaci, sirket_adresi: newSirket_adresi})
    }

    return (
        <div>
            <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">Şirket Bilgisi Güncelleme</h5>
                <h5 className="message">{message}</h5>
                <div className="company-or-personal-card">
                  <form>
                      <h5>Sirket Adi</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_adı(event.target.value) }}></input>
                      <h5>Sirket Sektörü</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_sektörü(event.target.value) }}></input>
                      <h5>Sirket Amaci</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_amaci(event.target.value) }}></input>
                      <h5>Sirket Adresi</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_adresi(event.target.value) }}></input>   
                  </form>
                <button className="button" onClick={update}>Değiştir</button>
                </div>
            </div>
        </div>
    )
}

export default SirketHakkimdaDuzenleme
