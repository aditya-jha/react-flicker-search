"use strict";

import Actions from "./../actions/index";
import ActionConstants from "./../actions/ActionConstants";

let defaultState = {
    images: [],
    showAll: true
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