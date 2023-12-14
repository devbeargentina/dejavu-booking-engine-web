import React from 'react';
import { mount } from 'enzyme';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
    test('renders correctly', () => {
        const wrapper = mount(<MyComponent />);
        expect(wrapper.find('h1').text()).toEqual('Hello, World!');
    });

    test('increments count on button click', () => {
        const wrapper = mount(<MyComponent />);
        const button = wrapper.find('button');

        button.simulate('click');
        expect(wrapper.find('span').text()).toEqual('Count: 1');

        button.simulate('click');
        expect(wrapper.find('span').text()).toEqual('Count: 2');
    });
});
