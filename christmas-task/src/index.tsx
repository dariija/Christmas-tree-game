import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import Header from './components/header/Header';
import MainToys from './components/main/Main';
import Footer from './components/footer/Footer';
import toysData from './data/data';
import './self-rating';
// import MainTree from "./components/main/MainTree";

function App() {
    const [activePage, setActivePage] = useState('toys');

    const [selectedToys, setSelectedToys] = useState<Array<string>>([]);
    const [selectedToysLogo, setSelectedToysLogo] = useState<number>(0);

    const selectToys = {
        name: 'select',
        value: selectedToys,
        setValue: setSelectedToys,
        setLogoValue: setSelectedToysLogo,
    };

    return (
        <>
            <Header
                activePage={activePage}
                handleChangeActivePage={setActivePage}
                selectedToysLogo={selectedToysLogo}
            />

            <main className="main">
                <div className="container">
                    <MainToys toysData={toysData} selectToys={selectToys} />
                    {/* <MainTree toysData={toysData} selectedToysNumbers={selectToys.value}/> */}
                </div>
            </main>

            <Footer />
        </>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
