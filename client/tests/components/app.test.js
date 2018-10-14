import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import App from '../../component/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  });
})