const btn = document.querySelector(".sign-up__btn");
const inputs = document.querySelectorAll(".sign-up__input");
const emailInput = document.getElementById("email");
const errorIcons = document.querySelectorAll(".sign-up__error-icon");
const errorTexts = document.querySelectorAll(".sign-up__error-text");
const form = document.querySelector(".sign-up__form");

let errors = [];

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formIsValid() {
    inputs.forEach((input, i) => {
        if (input.value === "") {
            errors.push(i);
        }
    })

    if (!emailIsValid(emailInput.value)) {
        errors.push(2);
    }

    if (errors.length > 0) {
        return false;
    } else {
        return true;
    }

}

function showErrors() {
    errors.forEach((error, i) => {
        inputs[errors[i]].classList.add("error");
        errorIcons[errors[i]].classList.add("show-error");
        errorTexts[errors[i]].classList.add("show-error");
    })
    errors = [];
}

function validateForm(e) {
    e.preventDefault();

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
        errorIcons[i].classList.remove("show-error");
        errorTexts[i].classList.remove("show-error");
    }

    if (formIsValid()) {
        form.submit();
    } else {
        showErrors();
    }
}

btn.addEventListener("click", validateForm);