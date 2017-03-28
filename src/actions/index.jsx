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
    },

    initFavs(images) {
        return {
            type: ActionConstants.SET_IMAGES_TO_FAVS,
            images
        }
    },

    addImageToFavs(image) {
        return {
            type: ActionConstants.ADD_IMAGE_TO_FAVS,
            image
        }
    },

    removeImageFromFavs(image) {
        return {
            type: ActionConstants.REMOVE_IMAGE_FROM_FAVS,
            image
        }
    }
};

export default ACTIONS;