import React from 'react';
import Header from '../Header';
import {shallow} from 'enzyme';

describe('storeLocator', function () {
    let mountedHeader;

    beforeEach(() => {
        mountedHeader = shallow(<Header/>)
    });

    it('should render logo', function () {
        const logoImg = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');

        expect(logoImg.length).toBe(1);
    });
});





