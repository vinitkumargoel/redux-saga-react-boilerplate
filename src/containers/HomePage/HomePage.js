import React from 'react';
import {connect} from "react-redux";

const HomePage = () => {
    return (
        <div>

        </div>
    );
};

function mapStateToProps(state) {
    console.log(state)
    return state
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
