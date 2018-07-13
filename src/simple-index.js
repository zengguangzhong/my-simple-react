import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import {createStore} from './store'
import {createStore,applyMiddleware} from 'redux'
// import {createStore} from './store'
import {reducer} from './reducers'

import {Counter} from './components/Counter'

// import createLogger from 'redux-logger';
// const logger= createLogger()

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
