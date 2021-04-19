const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
    nickname: /^([a-zA-Z0-9_\-\.])/,
    firstname: /\W/,
    lastname: /\W/,
    phone: /^[0-9]/,

};

/**
 * Function Validate - Check Input on RegExp
 * @param {HTMLInputElement} el 
 * @return {Boolean} - Return true if input valid or doesn't has data-require attr
 */

export function validate(el) {
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    console.log(el);
    console.log(regExpDic[regExpName].test(el.value));
    return regExpDic[regExpName].test(el.value);
}