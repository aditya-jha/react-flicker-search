"use strict";

import APIService from "./../services/APIService";
import ImageData from "./../models/ImageData";
import axios from "axios";

const IMAGE_SEARCH_SERVICE = {
    fetchImages(keyword) {
        return new Promise((resolve, reject) => {
            APIService.makeRequest({
                method: "get",
                url: "https://api.flickr.com/services/rest/",
                params: {
                    method: "flickr.photos.search",
                    api_key: "85c309c6ff5c44c4a355e09dcc915a44",
                    content_type: 1,
                    text: keyword,
                    format: "json",
                    nojsoncallback: 1,
                    per_page: 10
                }
            }).then((res) => {
                console.log(res.data);
                resolve(ImageData.parseImagesData(res.data.photos.photo));
            })
        })
    }
};

export default IMAGE_SEARCH_SERVICE;