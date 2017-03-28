"use strict";

import {connect} from "react-redux";
import AppComponent from './../components/AppComponent';
import Actions from "./../actions/index";

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;