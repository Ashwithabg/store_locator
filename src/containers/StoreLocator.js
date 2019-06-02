import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Button from "../components/Button";
import Map from "../components/Map";


class StoreLocator extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Button/> <Button/>
                <Map/>
            </div>
        )
    }
}


export default StoreLocator;