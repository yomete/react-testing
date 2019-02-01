import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
var assert = require('assert');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return -1 when the value is not present', function() {
  assert.equal([1,2,3].indexOf(4), -1);
});

describe('Enzyme Tests', () => {
  it('App loads with initial state of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('0');
  });

  it('on button works as expected', () => {
    const wrapper = shallow(<App />);
    const onButton = wrapper.find('button#onButton');
    onButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('1');
  });

  it('off button works as expected', () => {
    const wrapper = shallow(<App />);
    const offButton = wrapper.find('button#offButton');
    offButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('0');
  });
});

describe('Jest Tests', () => {
  it('snapshot matches', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
