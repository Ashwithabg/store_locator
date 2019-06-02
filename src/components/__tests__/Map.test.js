import React from 'React';
import {shallow} from 'enzyme';
import Map from '../Map';

describe('map', function () {
    let mountedMap;
    let props;

    beforeEach(() => {
        props = {
            imageName: 'testMap.png',
            location: 'testMap'
        };
        mountedMap = shallow(<Map {...props}/>)
    });

    it('should render Map image', function () {
        const image = mountedMap.find('img');

        expect(image.length).toBe(1)
    });

    it('should display the none map when no params are given', function () {
        let defaultMap = shallow(<Map/>);
        const defaultImage = defaultMap.find('img[src="images/none.png"]');

        expect(defaultImage.length).toBe(1)
    });

    it('should display the map image name passed to it', function () {
        const testMapImage = mountedMap.find('img[src="images/testMap.png"]');

        expect(testMapImage.length).toBe(1)
    });
});


