import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders a Form', () => {
    const title = '';
    const body = '';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    const wrapper = shallow(<Form title={title} body={body} handleChange={handleChange} handleSubmit={handleSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
