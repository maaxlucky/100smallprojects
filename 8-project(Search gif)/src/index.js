"use strict";
const img = document.querySelector('img')
const query = document.querySelector('#query')
const key = document.querySelector('#key')
const form = document.querySelector('form')
const errorText = document.querySelector('.error')

form.addEventListener('submit', checkInputs)

function errorMessage(message){
    errorText.textContent = message
    errorText.classList.remove('success')
    img.src = 'https://www.freeiconspng.com/uploads/error-icon-4.png'
}
function onSuccess(data) {
    errorText.textContent = 'Gif was successfully generated!'
    errorText.classList.add('success')
}

function onError(err) {
    if (err.meta.status === 200) {
        errorMessage(`ERROR: gifs with this query don't exist`)
    }
    else if (err.meta.status === 401) {
        errorMessage(`ERROR: please enter valid API key`)
    }
}

function generateGif(userAPI, userQuery){
    return new Promise(function(resolve, reject) {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${userAPI}&s=${userQuery}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                onError(response)
                resolve(response.data.images.original.url);
            })
    })
}

function displayGif(gif){
    img.src = gif;
}

function checkInputs(event) {
    event.preventDefault()
    const inputKey = key.value.trim()
    const userQuery = query.value;
    if (inputKey.length !== 32) errorText.textContent = 'Length of API key must be 32 characters'
    else {
        generateGif(inputKey, userQuery)
            .then(displayGif)
            .then(onSuccess)
    }
}
