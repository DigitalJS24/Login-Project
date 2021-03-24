import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import { validate } from './helpers/validate';

import UI from './config/ui.config';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notification';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

//events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(el => {
        removeInputError(el);
    });
    onSubmit();
})

inputs.forEach(el => {
    el.addEventListener('focus', () => removeInputError(el));
})

//handlers

async function onSubmit() {
    const isValideForm = inputs.every((el) => {
        const isValideInput = validate(el);
        if (!isValideInput) { showInputError(el) }
        return isValideInput;
    })
    if (!isValideForm) return;
    try {
        await login(inputEmail.value, inputPassword.value);
        form.reset();
        notify({ msg: 'Login success', className: 'alert-success' })

    } catch (err) {
        notify({ msg: 'Login failed', className: 'alert-danger', timeout: 3000 });
    }
}