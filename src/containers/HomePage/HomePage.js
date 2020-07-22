import React from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header";

const HomePage = () => {
    return (
        <div>
            <Header/>
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
