"use strict";

if(!localStorage.getItem('number')){
    localStorage.setItem('number', 0)
}

function programFlow(){
    const number = document.querySelector('.number')
    number.textContent = JSON.parse(localStorage.getItem('number'))
    const btns = document.querySelectorAll('button')
    btns.forEach(button => {
        button.addEventListener('click', function (event){
            if (event.target.dataset.key === 'decrease') number.textContent -= 1;
            else if (event.target.dataset.key === 'reset') number.textContent = 0;
            else if (event.target.dataset.key === 'increase') number.textContent = +number.textContent + 1;
            localStorage.setItem('number', JSON.stringify(number.textContent));
        })
    })
}

programFlow()