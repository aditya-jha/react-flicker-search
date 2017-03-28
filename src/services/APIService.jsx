"use strict";

import axios from "axios";
import APIEndpoints from "./../models/APIEndpoints";

// axios.interceptors.request.use((config) => {
//     config.headers["Authorization"] = "";
//
//     if (!config.headers["Content-Type"]) {
//         config.headers["Content-Type"] = "application/json";
//     }
//     return config;
// });

const APIService = {
    makeRequest(config) {
        return axios.request({
            method: config.method,
            baseURL: config.baseURL ? config.baseUrl : APIEndpoints.apiBase,
            url: config.url,
            data: config.data,
            headers: config.headers ? config.headers : {},
            params: config.params,
            timeout: config.timeout ? config.timeout : 100000,
            cancelToken: config.cancelToken
        });
    },

    errorHandler(reject, err) {
        switch (err.code) {
            case "ECONNABORTED":
                reject(err);
                break;
            default:
                reject(err.response.data.error);
        }
    }
};

export default APIService;