"use strict";

import ActionConstants from "./ActionConstants";

const ACTIONS = {
    setImagesToState(images) {
        return {
            type: ActionConstants.SET_IMAGES_TO_STATE,
            images
        }
    },

    toggleShowAll() {
        return {
            type: ActionConstants.TOGGLE_SHOW_ALL
        }
    },

    toggleImageFavStatus(imageIndex) {
        return {
            type: ActionConstants.TOGGLE_IMAGE_FAV_STATUS,
            imageIndex
        }
    }
};

export default ACTIONS;