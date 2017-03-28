"use strict";

import Actions from "./../actions/index";
import ActionConstants from "./../actions/ActionConstants";

let defaultState = {
    images: [],
    showAll: true
};

const REDUCER = (state = defaultState, action) => {
    switch (action.type) {
        case ActionConstants.SET_IMAGES_TO_STATE:
            return {
                ...state,
                images: action.images
            };
        default:
            return state;
    }
};

export default REDUCER;