import React from 'react';
import Header from '../components/Header';
import Button from "../components/Button";
import Map from "../components/Map";
import '../App.css';

class StoreLocator extends React.Component {
    stores = [
        {
            'location': 'Portland',
            'address': '123 Portland Dr'
        },
        {
            'location': 'Astoria',
            'address': '123 Astoria Dr'
        },
        {
            'location': 'All location',
            'address': ''
        }];


    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png'
        };
        this.shops = this.stores;
    }

    render() {
        let storeButtons = this.shops.map((shop, id) => {
            return (<Button key={id} location={shop.location}/>)
        });

        return (
            <div>
                <Header/>
                <div> {storeButtons} </div>
                <Map imageName = {this.state.currentMap} location={this.props.location}/>
            </div>
        )
    }
}


export default StoreLocator;