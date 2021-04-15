import { countries, cities } from '../services/locations.service';

class Locations {
    constructor(countries, cities) {
        this.countriesReq = countries;
        this.citiesReq = cities;
        this.countries = null;
        this.cities = null;
        this.shortCountriesList = {};
        this.shortCityList = {}

    }
    async init() {
        const response = await this.countriesReq();

        this.countries = response;
        this.shortCountriesList = this.createShortCountriesList(this.countries);
        /* this.shortCityList = this.createShortCityList(res); */
        return response;
    }
    async getCitiesByName(country) {
        // country > find index > request cities by index > this.cities
        let index;
        for (let key in this.countries) {
            if (this.countries[key] === country) {
                console.log(this.countries[key], key);
                index = key;
            }
        }
        const response = await this.citiesReq(index);
        this.cities = response;
        this.shortCityList = this.createShortCityList(this.cities);
        console.log(this.shortCityList);
        return this.shortCityList

    }
    getCountryIndex(country) {

    }

    createShortCountriesList(countries) {
        const list = Object.values(countries).reduce((acc, country) => {
            acc.push(country);
            return acc;
        }, []);
        return list.sort();
    }

    createShortCityList(cities) {
        const list = Object.values(cities).reduce((acc, city) => {
            acc.push(city);
            return acc;
        }, []);
        return list.sort();
    }



}


const locations = new Locations(countries, cities);

export default locations;