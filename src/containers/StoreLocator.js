import React from 'react';
import axios from 'axios';

import Button from "../components/Button";
import Map from "../components/Map";
import Header from '../components/Header';
import mapChooser from "../mapChooser";

import '../App.css';

class StoreLocator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png',
            shops: []
        };

        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/data/shops.json');
        this.setState({shops: response.data.shops});
    }

    chooseMap(event) {
        this.setState({currentMap: mapChooser(event.target.value)});
    }

    render() {
        let storeButtons = this.state.shops.map((shop, id) => {
            return (<Button handleClick={this.chooseMap} key={id} location={shop.location}/>)
        });

        return (
            <div>
                <Header/>
                <div> {storeButtons} </div>
                <Map imageName={this.state.currentMap} location={this.props.location}/>
            </div>
        )
    }
}


export default StoreLocator;