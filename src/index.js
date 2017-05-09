import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    increment={() => store.dispatch({ type: 'INCREMENT' })}
    decrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);

render()
store.subscribe(render)
