import React from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css';
import Anasayfa from "./components/Anasayfa";
import Kiralık from './components/Kiralık';
import Satılık from './components/Satılık';
import Hakkımızda from './components/Hakkımızda';
import AdminAnasayfa from './components/AdminAnasayfa';
import IlanEkleme from './components/IlanEkleme';
import IlanSil from './components/IlanSil';
import IlanAktiflikDegistirme from './components/IlanAktiflikDegistirme';
import SirketHakkimdaDuzenleme from './components/SirketHakkimdaDuzenleme';
import EkipUyeEkle from './components/EkipUyeEkle';
import EkipUyeDuzenle from './components/EkipUyeDuzenle';
import EkipUyeSil from './components/EkipUyeSilme';
import Ilan from './components/Ilan';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Anasayfa/>}/>
        <Route exact path='/anasayfa'element={<Anasayfa/>}/>
        <Route exact path='/kiralik' element={<Kiralık/>}/>
        <Route exact path='/satilik' element={<Satılık/>}/>
        <Route exact path='/hakkimizda' element={<Hakkımızda/>}/>
        <Route exact path='/admin' element={<AdminAnasayfa/>}/>
        <Route exact path='/ilanEkleme' element={<IlanEkleme/>}/>
        <Route exact path='/ilanSil' element={<IlanSil/>}/>
        <Route exact path='/ilanDuzenle' element={<IlanAktiflikDegistirme/>}/>
        <Route exact path='/ekipUyeEkle' element={<EkipUyeEkle/>}/>
        <Route exact path='/ekipUyeDuzenle' element={<EkipUyeDuzenle/>}/>
        <Route exact path='/ekipUyeSil' element={<EkipUyeSil/>}/>
        <Route exact path='/hakkimdaDuzenle' element={<SirketHakkimdaDuzenleme/>}/>
        <Route exact path='/:ilan_id' element={<Ilan/>}/>
      </Routes>
    </div>
  );
}

export default App;
