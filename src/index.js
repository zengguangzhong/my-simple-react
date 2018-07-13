import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import {createStore} from './store'
import { createStore, applyMiddleware } from 'redux'
import {Provider,connect} from 'react-redux'
// import {createStore} from './store'
import { reducer } from './reducers'

import { Counter } from './components/Counter'

// import createLogger from 'redux-logger';
// const logger= createLogger()

const store = createStore(reducer)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
}

const App = connect(mapStateToProps,mapDispatchToProps)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
