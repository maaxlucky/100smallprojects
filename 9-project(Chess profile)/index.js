"use strict";

const form = document.querySelector('form')

const userImg = document.querySelector('img')
const usernameInput = document.querySelector('input')
const username = document.querySelector('.username')
const rapid = document.querySelector('.rapid')
const blitz = document.querySelector('.blitz')
const bullet = document.querySelector('.bullet')
const puzzles = document.querySelector('.puzzles')

form.addEventListener('submit', submitHandler)

function fillUserStats(rapidRating, blitzRating, bulletRating, puzzlesRating){
    rapid.textContent = `Rapid: ${rapidRating}`;
    blitz.textContent = `Blitz: ${blitzRating}`;
    bullet.textContent = `Bullet: ${bulletRating}`;
    puzzles.textContent = `Puzzles: ${puzzlesRating}`;
}

function submitHandler(event){
    event.preventDefault()
    const input = usernameInput.value.trim()
    getUser(input);
    username.textContent = `Username: ${input}`;
}

function getUser(username){
    return new Promise(function(resolve, reject){
        fetch(`https://api.chess.com/pub/player/${username}/stats`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                fillUserStats(data.chess_rapid.last.rating, data.chess_blitz.last.rating, data.chess_bullet.last.rating,
                    data.tactics.highest.rating)

                return fetch(`https://api.chess.com/pub/player/${username}`)
            })
            .then(response => response.json())
            .then(data => {
                userImg.src = data.avatar
            })
    })
}
