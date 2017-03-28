"use strict";

import ActionConstants from "./ActionConstants";

const ACTIONS = {
    setImagesToState(images) {
        return {
            type: ActionConstants.SET_IMAGES_TO_STATE,
            images
        }
    }
};

export default ACTIONS;