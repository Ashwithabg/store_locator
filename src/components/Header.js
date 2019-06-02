import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a className="Header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    );
}

export default Header;
