import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header';
import Main from './components/main/Main'
import Footer from './components/footer/Footer';
import toysData from './data/data'
import './style.css'


const App = () => {
  const [activePage, setActivePage] = useState('toys');

  const [selectedToys, setSelectedToys] = useState<Array<string>>([]);
  const [selectedToysLogo, setSelectedToysLogo] = useState<number>(0);

  const selectToys = {
    name: 'select',
    value: selectedToys,
    setValue: setSelectedToys,
    setLogoValue: setSelectedToysLogo
  }

  return (
    <React.Fragment>
      <Header activePage={activePage} handleChangeActivePage={setActivePage} selectedToysLogo={selectedToysLogo}/>
      <Main toysData={toysData} selectToys={selectToys}/>
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)