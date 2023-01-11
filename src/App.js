import React, { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Complited from './components/Complited/Complited';
import Documentation from './components/Documentation/Documentation';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import InProgress from './components/In-progress/In-progress';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ExtensionOfSubstation220Kulsary from './components/In-progress/Extension-of-substation-220-kulsary/Extension-of-substation-220-kulsary';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/zoom';
import ReplacementOfHighVoltageEquipmentAtSS220KvPravoberezhnaya from './components/In-progress/Replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/Replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya';

const App = () => {
  return (
      <div className="wrapper">
        <Fragment>
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path='/'>
              <Route index element={<Main/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='complited' element={<Complited/>}/>
              <Route path='in-progress'>
                <Route index element={<InProgress/>}/>
                <Route path='extension-of-substation-220-kulsary' element={<ExtensionOfSubstation220Kulsary/>}/>{/* Расширение ПС 220 Кульсары */}
                <Route path='replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya' element={<ReplacementOfHighVoltageEquipmentAtSS220KvPravoberezhnaya/>}/>{/* Замена высоковольтного оборудования на ПС 220кВ Правобережная */}
              </Route>
              <Route path='documentation' element={<Documentation/>}/>
              <Route path='contacts' element={<Contacts/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>   
          <Footer/>
        </Fragment>  
      </div>
  );
}

export default App;