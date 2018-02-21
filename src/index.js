import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import {Provider} from 'react-redux'


const store = applyMiddleware()(createStore)

ReactDOM.render(<App/>, document.getElementById('root'))