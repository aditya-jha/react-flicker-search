"use strict";

// read and  write from localstorage for persistence

const FAVS_KEY = "favs";

const ShortlistService = {
    fetchData() {
        return new Promise((resole, reject) => {
            try {
                let data = localStorage.getItem(FAVS_KEY) || "[]";
                data = JSON.parse(data);
                resole(data);
            } catch (err) {
                reject(err);
            }
        });
    },

    setData(data) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(FAVS_KEY, JSON.stringify(data));
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }
};

export default ShortlistService;