import React from 'react';
import Button from "../components/Button";
import Map from "../components/Map";
import Header from '../components/Header';
import mapChooser from "../mapChooser";
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
            'location': '',
            'address': ''
        }];


    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png'
        };
        this.shops = this.stores;
        this.chooseMap = this.chooseMap.bind(this);
    }

    chooseMap(event){
        this.setState({currentMap: mapChooser(event.target.value)});
    }

    render() {
        let storeButtons = this.shops.map((shop, id) => {
            return (<Button handleClick={this.chooseMap} key={id} location={shop.location}/>)
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