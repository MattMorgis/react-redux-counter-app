import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  render() {
    const { value, increment, decrement } = this.props
    return (
      <div>
        <p>
          Clicked: {value} times
        </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default Counter;
