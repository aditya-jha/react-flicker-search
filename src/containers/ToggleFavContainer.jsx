"use strict";

import {connect} from 'react-redux';
import ToggleFavComponent from './../components/ToggleFavComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        showAll: state.showAll
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleShowAll: () => {
            dispatch(actions.toggleShowAll());
        }
    }
};

const ToggleFavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleFavComponent);

export default ToggleFavContainer;