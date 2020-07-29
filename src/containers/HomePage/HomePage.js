import React from 'react';
import {connect} from "react-redux";

import "./HomePage.scss";
import ShowMovies from "../ShowMovies";
import AddMovie from "../AddMovie";

const HomePage = () => {
    return (
        <div className='HomePage'>
            <ShowMovies/>
            <AddMovie/>
        </div>
    );
};

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
