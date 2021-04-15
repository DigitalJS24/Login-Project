export const UI = {
    form: document.forms['loginForm'],
    formSignin: document.forms['signinForm'],
    inputEmail: document.getElementById('email'),
    inputPassword: document.getElementById('password'),
    inputSignin: document.getElementById('password'),
};
const elemsForm = document.querySelectorAll('.signinForm .form-control');

/* export function signinUI() {
    let signUI = [];
    for (let i = 0; i < elemsForm.length - 1; i++) {

        signUI.push(elemsForm.item(i));
    }
    return signUI;
} */

/* console.log(signinUI); */