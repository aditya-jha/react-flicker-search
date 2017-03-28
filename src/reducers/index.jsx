"use strict";

import ActionConstants from "./../actions/ActionConstants";

let defaultState = {
    images: [],
    showAll: true,
    favs: []
};

const REDUCER = (state = defaultState, action) => {
    let images;
    switch (action.type) {
        case ActionConstants.SET_IMAGES_TO_STATE:
            return {
                ...state,
                images: action.images
            };
        case ActionConstants.TOGGLE_SHOW_ALL:
            return {
                ...state,
                showAll: !state.showAll
            };
        case ActionConstants.SET_IMAGES_TO_FAVS:
            return {
                ...state,
                favs: action.images
            };
        case ActionConstants.ADD_IMAGE_TO_FAVS:
            images = state.favs.slice();
            images.push(action.image);
            return {
                ...state,
                favs: images
            };
        case ActionConstants.REMOVE_IMAGE_FROM_FAVS:
            images = [];
            state.favs.forEach((image) => (
                (image.id !== action.image.id) ? images.push(image) : null
            ));
            return {
                ...state,
                favs: images
            };
        case ActionConstants.TOGGLE_IMAGE_FAV_STATUS:
            images = state.images.slice();
            images[action.imageIndex].fav = !images[action.imageIndex].fav;
            return {
                ...state,
                images: images
            };
        default:
            return state;
    }
};

export default REDUCER;