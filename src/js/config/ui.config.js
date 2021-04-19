export const UI = {
    form: document.forms['loginForm'],
    formSignin: document.forms['signinForm'],
    inputEmail: document.getElementById('email'),
    inputPassword: document.getElementById('password'),
    signinEmail: document.getElementById('sign-email'),
    signinPassword: document.getElementById('sign-password'),
    signinNickname: document.getElementById('nickname'),
    signinFirstname: document.getElementById('firstname'),
    signinLastname: document.getElementById('lastname'),
    signinPhone: document.getElementById('phone'),
    signinGender: document.getElementById('gender'),
    signinCountry: document.getElementById('country'),
    signinCity: document.getElementById('city'),
    signinBirthday: document.getElementById('birthday'),

};
const elemsForm = document.querySelectorAll('.signinForm .form-control');

export function getRequiredKeyValue() {
    let key = {};
    elemsForm.forEach(item => {
        key[item.dataset.required] = item.value;
    });
    /* for (let i = 0; i < elemsForm.length - 3; i++) {

        key[elemsForm] += elemsForm.item(i).value;
    } */

    return key;
}