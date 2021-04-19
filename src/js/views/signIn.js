import locations from '../store/locations';
import { selectInit } from '../plugins/materialize/materialize';

class SigninView {
    constructor() {
        this._form = document.forms['signinForm'];
        this.country = document.getElementById('country');
        this.city = document.getElementById('city');
        this.birthday = document.getElementById('birthday');
    }
    get countryValue() {
        return this.country.value;
    }
    get cityValue() {
        return this.city.value;
    }
    get dateOfBirth() {
        return this.birthday.value
    }
    countriesListRender() {
        locations.shortCountriesList.forEach(elem => {
            this.country.insertAdjacentHTML('beforeend', this.listTemplate(elem));
        });

        selectInit();

    }

    async cityListRender() {
        this.citySelectClear();
        const list = await locations.getCitiesByName(this.countryValue);
        list.forEach(elem => {
            this.city.insertAdjacentHTML('beforeend', this.listTemplate(elem));
        });
        selectInit();
    }

    citySelectClear() {
        this.city.textContent = '';
    }

    listTemplate(item) {
        return `<option value='${item}'>${item}</option>`;
    }
}
const signinView = new SigninView();

export default signinView;