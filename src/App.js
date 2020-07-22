import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import HomePage from "./containers/HomePage/HomePage";


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>


function App() {
    return (
        <HashRouter>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <Route exact path="/" name="Home Page" render={props => <HomePage {...props}/>}/>
                </Switch>
            </React.Suspense>
        </HashRouter>

    );
}

export default App;
