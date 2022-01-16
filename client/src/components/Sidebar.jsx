import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <Link to="/anasayfa">Anasayfaya Dön</Link>
                <Link to="/ilanEkleme">İlan Ekleme</Link>
                <Link to="/ilanSil">İlan Silme</Link>
                <Link to="/ilanDuzenle">İlan Aktiflik Değiştirme</Link>
                <Link to="/ekipUyeEkle">Ekibe Üye Ekle</Link>
                <Link to="/ekipUyeDuzenle">Ekip Üye Düzenle</Link>
                <Link to="/ekipUyeSil">Ekibten Üye Sil</Link>
                <Link to="/hakkimdaDuzenle">Şirket Bilgisi Güncelleme</Link>
            </div>
        </div>
    )
}

export default Sidebar
