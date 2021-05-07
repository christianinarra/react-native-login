import axios from 'axios';

import * as c from '../constants';

export async function login(data){
    try{        
        let res = await axios.post(c.LOGIN, data);

        return res.data;
    }catch (e) {
        console.log(e);
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}