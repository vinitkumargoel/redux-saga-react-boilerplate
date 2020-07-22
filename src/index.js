import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider as ReduxProvider} from 'react-redux'
import store from './middleware/store'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<ReduxProvider store={store}><App/></ReduxProvider>, document.getElementById('root'))
