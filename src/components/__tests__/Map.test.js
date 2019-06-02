import React from 'React';
import Map from '../Map';
import {shallow} from 'enzyme';

describe('map', function () {
    let mountedMap;

    beforeEach(() => {
        mountedMap = shallow(<Map/>)
    });

    it('should render Map image', function () {
        const image = mountedMap.find('img');

        expect(image.length).toBe(1)
    });
});


