$(document).ready(function () {
    let form = document.getElementsByClassName('main-form')[0];
    let inputs = form.querySelectorAll('.input-default');
    let button = form.getElementsByClassName('signin-btn')[0];
    let checkbox = form.querySelector('input[type=checkbox]')
    button.disabled = true
    console.log(form, inputs, button, checkbox)
    checkbox.onchange = function (e) {
        if (checkbox.checked) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }
    form.onsubmit = function (e) {
        e.preventDefault();
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
                count++
            }
        }
        if (count === inputs.length) {

        }
    }
})
