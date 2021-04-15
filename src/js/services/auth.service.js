import axios from '../plugins/axios';

/**
 * Function login - make login request to API
 * @param {String} email 
 * @param String} password 
 */
export async function login(email, password) {
    try {
        const response = await axios.post(`/auth/login`,
            JSON.stringify({ email, password }));
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err)
        return Promise.reject(err);
    }
}
/**
 * Function signIn - make sign in request to API
 * @param {} signin object 
 */

export async function signIn(obj) {
    try {
        const response = await axios.post('/auth/signup',
            JSON.stringify(obj));
        console.log(response)
        return response.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}