import React from 'React';
import StoreLocator from '../StoreLocator';
import {shallow} from 'enzyme';

describe('storeLocator', function () {
    let mountedStoreLocator;

    beforeEach(() =>{
        mountedStoreLocator = shallow(<StoreLocator/>)
    });

    it('renders Header', function () {
        const mountedHeader = mountedStoreLocator.find('Header');

        expect(mountedHeader.length).toBe(1)
    });

    it('renders two Buttons', function () {
        const mountedButton = mountedStoreLocator.find('Button');

        expect(mountedButton.length).toBe(2)
    });

    it('renders Map', function () {
        const mountedMap = mountedStoreLocator.find('Map');

        expect(mountedMap.length).toBe(1)
    });
});


