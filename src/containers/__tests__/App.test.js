import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('app', function () {
    it('renders without crashing', function () {
        let mountedApp = shallow(<App/>)
    });

    it('renders store locator', function () {
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('StoreLocator');

        expect(locators.length).toBe(1)
    });
});


