import React from 'React';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

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

        expect(mountedButton.length).toBe(3)
    });

    it('renders Map', function () {
        const mountedMap = mountedStoreLocator.find('Map');

        expect(mountedMap.length).toBe(1)
    });
});


