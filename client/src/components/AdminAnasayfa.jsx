import React from 'react'
import Sidebar from "./Sidebar";

function AdminAnasayfa() {
    return (
        <div>
            <Sidebar/>
            <div className="content p-5" >
                <div className="adminAlert">
                    <h2>Admin Paneline Hoşgeldiniz!<br/>Lütfen yapılacak işlemi seçiniz.</h2>
                </div>
            </div>
        </div>
    )
}

export default AdminAnasayfa
