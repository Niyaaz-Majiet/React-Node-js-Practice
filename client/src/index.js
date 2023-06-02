import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/Home';
import {setLocalStorageObject} from "./Util";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (localStorage.getItem("game-session") === null) {
    setLocalStorageObject("game-session", {
        tries: 0,
        rounds: 1,
        totalTries: 0,
        numberOfSetCards: 0,
        percentDone:0
    })
}

root.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
);
