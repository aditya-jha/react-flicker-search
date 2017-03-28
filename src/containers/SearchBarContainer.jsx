"use strict";

import {connect} from 'react-redux';
import SearchBarComponent from './../components/SearchBarComponent';
import actions from "./../actions/index";

const mapStateToProps = (state) => {
    return {
        showAll: state.showAll
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setImagesToState: (images) => {
            dispatch(actions.setImagesToState(images));
        },

        toggleShowAll: () => {
            dispatch(actions.toggleShowAll());
        }
    }
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBarComponent);

export default SearchBarContainer;