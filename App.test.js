import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('starts with a count of 0', () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find('p').text()
  const countState = wrapper.state().count
  // expect(countState).toEqual(0)
  expect(text).toEqual('Current count: 0')
});

it('can increment the count when the button is clicked', () => {
  const wrapper = shallow(<App />)
  const incrementBtn = wrapper.find('button.increment')
  incrementBtn.simulate('click')
  incrementBtn.simulate('click')

  const text = wrapper.find('p').text()
  expect(text).toEqual('Current count: 2')  
})

it('can decrement the count when the button is clicked', () => {
  const wrapper = shallow(<App />)
  const decrementBtn = wrapper.find('button.decrement')
  decrementBtn.simulate('click')
  const text = wrapper.find('p').text()
  expect(text).toEqual('Current count: -1') 
}) 