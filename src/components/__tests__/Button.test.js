import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', function () {
    let mountedButton;

    beforeEach(() => {
        mountedButton = shallow(<Button/>)
    });

    it('should render button', function () {
        const button = mountedButton.find('button');

        expect(button.length).toBe(1)
    });

    it('calls function that is passed to it when clicked', function () {
        const mockCallback = jest.fn();
        const mountedButtonWIthCallback = shallow(<Button handleClick={mockCallback}/>);

        mountedButtonWIthCallback.find('button').simulate('click');

        expect(mockCallback.mock.calls.length).toEqual(1)
    });

    describe("when location is passed", function () {
        let mountedButton;
        let props;

        beforeEach(()=>{
           props = {
               location: "Location1"
           };
           mountedButton = shallow(<Button {...props}/>)
        });

        it('should render button with location name', function () {
            const location_name = mountedButton.find('.location_button');

            expect(location_name.text()).toEqual('Location1')
        });
    });

    describe("when location is undefined", function () {
        let mountedButton;
        let props;

        beforeEach(()=>{
           props = {
               location: undefined
           };
           mountedButton = shallow(<Button {...props}/>)
        });

        it('should display all locations', function () {
            const location_name = mountedButton.find('.location_button');

            expect(location_name.text()).toEqual('All Locations')
        });
    });
});


