import React from 'react';
// import PropTypes from 'prop-types';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>
          Clicked: 0 times
        </p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default Counter;
