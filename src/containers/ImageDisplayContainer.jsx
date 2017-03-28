"use strict";

import {connect} from 'react-redux';
import ImageDisplayComponent from './../components/ImageDisplayComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        image: ownProps.image,
        imageIndex: ownProps.imageIndex,
        favs: ownProps.favs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (image) => {
            dispatch(actions.removeImageFromFavs(image));
        },

        addFav: (image) => {
            dispatch(actions.addImageToFavs(image));
        }
    }
};

const ImageDisplayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDisplayComponent);

export default ImageDisplayContainer;