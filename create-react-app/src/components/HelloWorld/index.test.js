import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloWorld />, div);
});
