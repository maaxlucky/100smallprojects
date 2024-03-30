"use strict";

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const restartBtn = document.querySelector('.restart')

const timer = document.querySelector('.timer');
const beginTime = timer.textContent;

let interval = undefined;

if (!localStorage.getItem('timer')){
    const [min, sec] = timer.textContent.split(':')
    let userTimer = new Date().setMinutes(+min, +sec)
    localStorage.setItem('timer', JSON.stringify(userTimer))
} else {
    const unix = JSON.parse(localStorage.getItem('timer'))
    const date = new Date(unix)
    timer.textContent = `${date.getMinutes()}:${date.getSeconds()}`
}

function Counter(unix) {
    return function(){
        const date = new Date(unix-1000)
        timer.textContent = `${date.getMinutes()}:${date.getSeconds()}`
        unix = unix - 1000
        return localStorage.setItem('timer', JSON.stringify(unix))
    }
}

pauseBtn.addEventListener('click', function (event){
    clearInterval(interval)
})

startBtn.addEventListener('click', function (event) {
    let userTimer = JSON.parse(localStorage.getItem('timer'))
    interval = setInterval(Counter(userTimer), 1000)
})

restartBtn.addEventListener('click', function (event) {
    clearInterval(interval)
    timer.textContent = beginTime
    const [min, sec] = timer.textContent.split(':')
    let userTimer = new Date().setMinutes(+min, +sec)
    localStorage.setItem('timer', JSON.stringify(userTimer))
})


