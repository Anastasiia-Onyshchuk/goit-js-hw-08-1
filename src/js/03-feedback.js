import throttle from "lodash.throttle";
import '../css/common.css';
import '../css/03-feedback.css';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

let formData = {};

document.addEventListener('DOMContentLoaded', () => {
    populateFormOutput();
});

refs.form.addEventListener('input', throttle(handlerFormOutput, 500))
function handlerFormOutput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }

    function onSubmitForm(evt){
    evt.preventDefault();
    if (refs.input.value === '' || refs.textarea.value === '') {
        alert('ЗАПОВНІТЬ УСІ ПОЛЯ ФОРМИ');
        return;
    }
        localStorage.removeItem(STORAGE_KEY);
         formData = {
            email: refs.input.value,
            message: refs.textarea.value,
    };
        console.log(formData);
    evt.currentTarget.reset();
   
    }

refs.form.addEventListener('submit', onSubmitForm );
function populateFormOutput() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        formData = JSON.parse(savedFormData) || {};
        refs.input.value = formData.email || '';
        refs.textarea.value = formData.message || '';
    }
}