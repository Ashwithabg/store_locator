import React from 'React';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';

describe('storeLocator', function () {
    let mountedStoreLocator;

    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator/>)
    });

    it('calls axios.get in #componentDidMount', function () {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalled();
        })
    });

    it('calls axios.get with correct url', function () {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        })
    });

    it('updates state after AJAX call', function () {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(mountedStoreLocator.state()).toHaveProperty('shops',
                [{
                    "location": "test location",
                    "address": "test address"
                }])
        })
    });

    it('renders Header', function () {
        const mountedHeader = mountedStoreLocator.find('Header');

        expect(mountedHeader.length).toBe(1)
    });

    it('renders zero Buttons initially', function () {
        const mountedButton = mountedStoreLocator.find('Button');

        expect(mountedButton.length).toBe(0)
    });

    it('renders Map', function () {
        const mountedMap = mountedStoreLocator.find('Map');

        expect(mountedMap.length).toBe(1)
    });

    describe('choose map', function () {
        it('should update current map state', function () {
            let locationName = 'testland';
            let locationImageName = locationName + '.png';
            let mountedStoreLocator = shallow(<StoreLocator/>);
            let mockEvent = {target: {value: locationName}};

            mountedStoreLocator.instance().chooseMap(mockEvent);

            expect(mountedStoreLocator.instance().state.currentMap).toBe(locationImageName)

        });
    });

});


