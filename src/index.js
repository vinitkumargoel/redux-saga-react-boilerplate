import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider as ReduxProvider} from 'react-redux'
import store from './middleware/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloProvider} from '@apollo/client';
import {client} from "./apollo.connect";

ReactDOM.render(<ReduxProvider store={store}>
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
</ReduxProvider>, document.getElementById('root'))
