import signinView from '../views/signIn';
import { getRequiredKeyValue } from '../config/ui.config';

class SigninStore {
    constructor() {

    }
    serializeBirthday() {
        const date = new Date(signinView.dateOfBirth)
        return {
            date_of_birth_day: date.getDate(),
            date_of_birth_month: date.getMonth() + 1,
            date_of_birth_year: date.getFullYear()
        }
    }
    getInfoFromSigninForm() {
        const location = { country: signinView.countryValue, city: signinView.cityValue };
        const info = Object.assign(getRequiredKeyValue(), this.serializeBirthday(), location);
        return info;
    }
}

const signinStore = new SigninStore();
export default signinStore;