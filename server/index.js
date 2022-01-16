const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    pass:'',
    database:'medeniyet_emlak',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

//Tüm İlanları Getirir
app.get("/api/get",(req,res)=>{

    const sqlSelect = "SELECT * FROM ilanlar";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

//Tüm Aktif Olan İlanları Getirir
app.get("/api/get/aktif",(req,res)=>{

    const sqlSelect = "SELECT * FROM ilanlar WHERE ilan_aktiflik='Aktif'";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

//Kiralık ve Aktif Olan İlanları Getirir
app.get("/api/get/kiralik",(req,res)=>{

    const value = "Kiralık"
    const sqlSelect = "SELECT * FROM ilanlar WHERE ilan_satışTürü='Kiralık' AND ilan_aktiflik='Aktif'" ;
    db.query(sqlSelect,value,(err,result)=>{
        res.send(result);
    });
})

//Satılık ve Aktif Olan İlanları Getirir
app.get("/api/get/satilik",(req,res)=>{

    const value = "Kiralık"
    const sqlSelect = "SELECT * FROM ilanlar WHERE ilan_satışTürü='Satılık' AND ilan_aktiflik='Aktif'" ;
    db.query(sqlSelect,value,(err,result)=>{
        res.send(result);
    });
})

//İlan Ekleme
app.post('/create/ilan',(req,res)=>{
    const ilan_ismi=req.body.ilan_ismi;
    const ilan_fiyatı=req.body.ilan_fiyatı;
    const ilan_özellikleri=req.body.ilan_özellikleri;
    const ilan_şehir=req.body.ilan_şehir;
    const ilan_satışTürü=req.body.ilan_satışTürü;
    const ilan_aktiflik=req.body.ilan_aktiflik;

    db.query("INSERT INTO ilanlar (ilan_ismi, ilan_fiyatı, ilan_özellikleri, ilan_şehir, ilan_satışTürü, ilan_aktiflik) VALUES (?,?,?,?,?,?)",[ilan_ismi,ilan_fiyatı,ilan_özellikleri,ilan_şehir,ilan_satışTürü,ilan_aktiflik],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted")
        }
    })
})

//İlan Güncelleme
app.put('/update/ilan',(req,res)=>{
    const ilan_id = req.body.ilan_id;
    const ilan_aktiflik = req.body.ilan_aktiflik;

    db.query("UPDATE ilanlar SET ilan_aktiflik = ? WHERE ilan_id = ?",[ilan_aktiflik,ilan_id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

//İlan Silme
app.delete('/delete/ilan/:ilan_id',(req,res) => {
    const ilan_id=req.params.ilan_id;
    db.query("DELETE FROM ilanlar WHERE ilan_id = ?",ilan_id,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
//Ekipteki Kişilerin Bilgilerini Getirir
app.get("/api/get/ekip",(req,res)=>{

    const sqlSelect = "SELECT * FROM ekip ";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

//Ekibe Üye Ekleme
app.post('/create/ekip',(req,res)=>{
    const ekip_isim=req.body.ekip_isim;
    const ekip_soyisim=req.body.ekip_soyisim;
    const ekip_görev=req.body.ekip_görev;
    const ekip_github=req.body.ekip_github;
    const ekip_linkedin=req.body.ekip_linkedin;
    const ekip_mail=req.body.ekip_mail;

    db.query("INSERT INTO ekip (ekip_isim, ekip_soyisim, ekip_görev, ekip_github, ekip_linkedin, ekip_mail) VALUES (?,?,?,?,?,?)",[ekip_isim,ekip_soyisim,ekip_görev,ekip_github,ekip_linkedin,ekip_mail],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted")
        }
    })
})
//Ekip Güncelleme
app.put('/update/ekip',(req,res)=>{
    const ekip_id = req.body.ekip_id;
    const ekip_isim = req.body.ekip_isim;
    const ekip_soyisim = req.body.ekip_soyisim;
    const ekip_görev = req.body.ekip_görev;
    const ekip_github = req.body.ekip_github;
    const ekip_linkedin = req.body.ekip_linkedin;
    const ekip_mail = req.body.ekip_mail;

    db.query("UPDATE ekip SET ekip_isim=?,ekip_soyisim=?,ekip_görev=?,ekip_github=?,ekip_linkedin=?,ekip_mail=? WHERE ekip_id = ?",[ekip_isim,ekip_soyisim,ekip_görev,ekip_github,ekip_linkedin,ekip_mail,ekip_id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})
//Ekip Üye Silme
app.delete('/delete/ekip/:ekip_id',(req,res) => {
    const ekip_id=req.params.ekip_id;
    db.query("DELETE FROM ekip WHERE ekip_id = ?",ekip_id,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
//Sirket Bilgilerini Getirir
app.get("/api/get/sirket",(req,res)=>{

    const sqlSelect = "SELECT * FROM sirket ";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

//Sirket Bilgilerini Düzenleme
app.put('/update/sirket',(req,res)=>{
    
    const sirket_adı=req.body.sirket_adı;
    const sirket_sektörü=req.body.sirket_sektörü;
    const sirket_amaci=req.body.sirket_amaci;
    const sirket_adresi=req.body.sirket_adresi;
    
    db.query("UPDATE sirket SET sirket_adı=?,sirket_sektörü=?,sirket_amaci=?,sirket_adresi=? WHERE sirket_id=1",[sirket_adı,sirket_sektörü,sirket_amaci,sirket_adresi],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Updated")
        }
    });
})

//Tek Bir İlanı Getirme
app.get("/api/get/ilan/:ilan_id",(req,res)=>{

    const ilan_id=req.params.ilan_id;
    db.query("SELECT * FROM ilanlar WHERE ilan_id=?",[ilan_id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
})

app.listen(3001, ()=>{
    console.log('running on port 3001');
});
