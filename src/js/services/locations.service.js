import axios from '../plugins/axios';

/**
 * Function countries - make countries request to API
 * @return [String] countries
 */

export async function countries() {
    try {
        const response = await axios.get(`/location/get-countries`);
        return response;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}

/**
 * Function cities - make cities request to API by country index
 * @param (Number) countryIndex 
 * @returns [String]
 */

export async function cities(countryIndex) {
    try {
        const response = await axios.get(`location/get-cities/${countryIndex}`);
        return response;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}