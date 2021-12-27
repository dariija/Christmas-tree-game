import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import Header from './components/header/Header';
import MainToys from './components/main/Main';
import Footer from './components/footer/Footer';
import toysData from './data/data';
import './self-rating';
import MainTree from './components/main/MainTree';
import { checkLocalStorageSelectedToys } from './functions/checkLocalStorage';
import MainStart from './components/main/MainStart';

function Route({ path, children }: { path: string; children: JSX.Element }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            console.log('Location Change');
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
}

function App() {
    const [activePage, setActivePage] = useState('');
    const [audioIsPlaying, setAudioIsPlaying] = useState(false);

    const select = checkLocalStorageSelectedToys('select');
    const [selectedToys, setSelectedToys] = useState<string[]>(select || []);
    const [selectedToysLogo, setSelectedToysLogo] = useState<number>(selectedToys.length || 0);

    const selectToys = {
        name: 'select',
        value: selectedToys,
        setValue: setSelectedToys,
        setLogoValue: setSelectedToysLogo,
    };

    const music = {
        name: 'music',
        value: audioIsPlaying,
        setValue: setAudioIsPlaying,
    };

    useEffect(() => {
        setSelectedToysLogo(selectedToys.length);
    }, []);

    return (
        <>
            <Header
                activePage={activePage}
                handleChangeActivePage={setActivePage}
                selectedToysLogo={selectedToysLogo}
                audio={{ audioIsPlaying, setAudioIsPlaying }}
            />

            <main className="main">
                <div className="container">
                    <Route path="/">
                        <MainStart handleChangeActivePage={setActivePage} />
                    </Route>

                    <Route path="/toys">
                        <MainToys toysData={toysData} selectToys={selectToys} />
                    </Route>

                    <Route path="/tree">
                        <MainTree toysData={toysData} selectedToysNumbers={selectToys.value} music={music} />
                    </Route>
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
