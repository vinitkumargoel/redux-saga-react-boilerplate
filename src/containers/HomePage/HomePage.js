import React from 'react';
import {connect} from "react-redux";

import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className='HomePage'>
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
