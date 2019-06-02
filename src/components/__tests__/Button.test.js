import React from 'React';
import Button from '../Button';
import {shallow} from 'enzyme';

describe('Button', function () {
    let mountedButton;

    beforeEach(() => {
        mountedButton = shallow(<Button/>)
    });

    it('should render button', function () {
        const button = mountedButton.find('button');

        expect(button.length).toBe(1)
    });
});


