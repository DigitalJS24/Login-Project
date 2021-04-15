import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//init tabs
const tabsElem = document.querySelector('.tabs');
M.Tabs.init(tabsElem);

//init datepickers
const datePicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datePicker);

//init select
const select = document.querySelectorAll('.select-location');
M.FormSelect.init(select);
export function selectInit() { M.FormSelect.init(select) };