import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';

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





