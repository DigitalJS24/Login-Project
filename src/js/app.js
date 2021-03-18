import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';

const { form, inputEmail, inputPassword } = UI;

//events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
})


//handlers

function onSubmit() {

}