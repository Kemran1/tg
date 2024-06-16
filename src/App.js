import React, { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./components/hooks/useTelegram";

const tg = window.Telegram.WebApp;

function App() {
    const{onToggleButton}=useTelegram();



    useEffect(() => {
        tg.ready();

    }, []);

    return (
        <div className="App">

            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
