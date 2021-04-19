import '../css/style.css';
import './plugins';
import { validate } from './helpers/validate';

import { UI } from './config/ui.config';
import { showInputError, removeInputError } from './views/form';
import { login, signIn } from './services/auth.service';
import { notify } from './views/notification';
import { getNews } from './services/news.service';
import locations from './store/locations';
import signinView from './views/signIn';
import signinStore from './store/signin.store';





const { form, formSignin, inputEmail, inputPassword, ...signinInputs } = UI;
/* const { form, formSignin, inputEmail, inputPassword } = UI; */
const inputs = [inputEmail, inputPassword];




//events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(el => {
        removeInputError(el);
    });
    onSubmit();
})

formSignin.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitSignin();
})

const select = document.getElementById('country');
select.addEventListener('change', () => {
    signinView.cityListRender();
})


inputs.forEach(el => {
    el.addEventListener('focus', () => removeInputError(el));
})


initApp();
//handlers
/* console.log(signinStore.getInfoFromSigninForm()); */

async function initApp() {
    await locations.init();
    /* signinView.setAutocompleteData(locations.shortCountriesList); */
    signinView.countriesListRender();
    signinView.cityListRender();

}

async function onSubmit() {
    const isValideForm = inputs.every((el) => {
        console.log(el);
        const isValideInput = validate(el);
        if (!isValideInput) { showInputError(el) }
        return isValideInput;
    })
    if (!isValideForm) return;
    try {
        await login(inputEmail.value, inputPassword.value);
        await getNews();
        form.reset();
        notify({ msg: 'Login success', className: 'alert-success' })

    } catch (err) {
        notify({ msg: 'Login failed', className: 'alert-danger', timeout: 3000 });
    }
}


async function onSubmitSignin() {
    console.log(signinStore.getInfoFromSigninForm());

    const isValideForm = Object.values(signinInputs).every((el) => {
        const isValideInput = validate(el);

        if (!isValideInput) { showInputError(el) }
        return isValideInput;
    })
    if (!isValideForm) return;
    try {
        /* const req = signinUI().reduce((acc, el) => {
            acc[el.dataset.required] = el.value;
            return acc;
        }, {}) */

        await signIn(signinStore.getInfoFromSigninForm());

        formSignin.reset();
        notify({ msg: 'Login success', className: 'alert-success' })

    } catch (err) {
        notify({ msg: 'Login failed', className: 'alert-danger', timeout: 3000 });
    }
}