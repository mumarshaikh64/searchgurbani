// *****API helper class *******

import Axios from 'axios';
export let ApiHelper = {

    // API get function
'get': async (url, data = {}, tokenNeed = true, config = {}) => {
        let headers = {
            'Content-Type': 'application/json',
        };
        // if (tokenNeed) {
        //     headers['x-access-token'] = userData.token;
        // }
        return await Axios.get(url, {
            params: data,
            headers,
            ...config,
        }).catch((error) => {
            handleError(error.response);
        });
    },

    // API post function
'post': async (url, data, tokenNeed = true, config = {}) => {
        let headers = {
            'Content-Type': 'application/json',
        };
        // if (tokenNeed) {
        //     headers['x-access-token'] = userData.token;
        // }
        return await Axios.post(url, data, {
            headers,
            ...config,
        }).catch((error) => {
            handleError(error.response);
        });
    },


    // API put function
'put': async (url, data, tokenNeed = true, config = {}) => {
        let headers = {
            'Content-Type': 'application/json',
        };
        // if (tokenNeed) {
        //     headers['x-access-token'] = userData.token;
        // }

        return await Axios.put(url, data, {
            headers,
            ...config
        }).catch((error) => {
            handleError(error.response);
        });
    },
    // API delete function
'delete': async (url, data = {}, tokenNeed = true, config = {}) => {
        let headers = {
            'Content-Type': 'application/json',
        };
        // if (tokenNeed) {
        //     headers['x-access-token'] = userData.token;
        // }

        return await Axios.delete(url, {
            params: data,
            headers,
            ...config
        }).catch((error) => {
            handleError(error.response);
        });
    }
};

function handleError(error) {
    if (error) {
        let message = error.data.message;
        // alert(message)
    } else {
        // alert('Cant load data! Please check internet connection')

    }
}