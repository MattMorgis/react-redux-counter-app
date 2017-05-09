import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

ReactDOM.render(
  <Counter
    value={0}
  />,
  document.getElementById('root')
);
