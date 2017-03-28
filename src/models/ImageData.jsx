"use strict";

export default class ImageData {
    constructor(image) {
        this.id = image.id;
        this.secret = image.secret;
        this.server = image.server;
        this.farm = image.farm;
        this.title = image.title;
        this.fav = false;
        this.url = "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg";
    }

    static parseImagesData(data = []) {
        let images = [];
        data.forEach((image) => images.push(new ImageData(image)));
        return images;
    }
}