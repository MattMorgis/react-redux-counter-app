import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  render() {
    const { value } = this.props
    return (
      <div>
        <p>
          Clicked: {value} times
        </p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default Counter;
