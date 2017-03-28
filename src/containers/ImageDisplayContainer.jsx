"use strict";

import {connect} from 'react-redux';
import ImageDisplayComponent from './../components/ImageDisplayComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        image: state.images[ownProps.imageIndex],
        imageIndex: ownProps.imageIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleImageFavStatus: (imageIndex) => {
            dispatch(actions.toggleImageFavStatus(imageIndex));
        }
    }
};

const ImageDisplayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDisplayComponent);

export default ImageDisplayContainer;