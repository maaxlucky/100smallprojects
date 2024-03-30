"use strict";

import "./style/style.css";

const form = document.querySelector("form");

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

form.addEventListener("input", validateLiveInputs);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentNode;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.textContent = message;
};

const setSuccess = (element) => {
    const inputControl = element.parentNode;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.textContent = "";
};

const isValidEmail = (emailValue) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
};

function validateLiveInputs(event) {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = passwordConfirm.value.trim();

    if (event.target.id === "email") {
        if (emailValue === "") {
            setError(email, "Email is required");
        } else if (!isValidEmail(emailValue)) {
            setError(email, "Please provide correct email");
        } else setSuccess(email);
    }
    if (event.target.id === "country") {
        if (countryValue === "") {
            setError(country, "Country is required");
        }
    }
    if (event.target.id === "zip") {
        if (zipValue === "") {
            setError(zip, "Zip code is required");
        } else if (zipValue.length < 4) {
            setError(zip, "Zip code must be al least 4 characters");
        } else setSuccess(zip);
    }
    if (event.target.id === "password") {
        if (passwordValue === "") {
            setError(password, "Password is required");
        } else if (passwordValue.length < 8) {
            setError(password, "Password should be at least 8 characters");
        } else setSuccess(password);
    }
    if (event.target.id === "password-confirm") {
        if (confirmValue === "") {
            setError(passwordConfirm, "Confirm password is required");
        } else if (confirmValue.length < 8) {
            setError(
                passwordConfirm,
                "Password should be at least 8 characters"
            );
        } else setSuccess(passwordConfirm);
    }
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = passwordConfirm.value.trim();

    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }

    if (countryValue === "") {
        setError(country, "Country is required");
    }

    if (zipValue === "") {
        setError(zip, "Zip is required");
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters.");
    } else setSuccess(password);

    if (confirmValue === "") {
        setError(passwordConfirm, "Confirm password is required");
    } else if (passwordValue !== confirmValue) {
        setError(passwordConfirm, "Confirm password is not equal password");
    } else setSuccess(passwordConfirm);
};
