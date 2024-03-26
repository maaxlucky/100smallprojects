"use strict";

// Random password
/*

const arr = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    symbols: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
    uppercase_letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowercase_letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
}

// function composeChars(n, min, max=min) {
//     let password = ''
//     for (let i = 0; i < n; i++) {
//         let keys = Object.keys(arr)
//         let randomKey = arr[keys[Math.floor(Math.random() * (max - min + 1) + min)]]
//         password = password + randomKey[Math.floor(Math.random() * randomKey.length)]
//     }
//     return password
// }

function composeArrays(...keys){
    let arr = []
    for (let i = 0; i < keys.length; i++) {
        arr = arr.concat(keys[i])
    }
    return arr
}

function chooseChar(array, n){
    let password = ''
    for (let i = 0; i < n; i++) {
        password += array[Math.floor(Math.random() * array.length)]
    }
    return password
}

function generatePassword() {
    const randomPassword = document.querySelector('.password')
    const length = document.querySelector('#length')
    const uppercase = document.querySelector('#uppercase')
    const lowercase = document.querySelector('#lowercase')
    const number = document.querySelector('#numbers')
    const symbol = document.querySelector('#symbols')
    const btn = document.querySelector('button')
    btn.addEventListener('click', function (event){
        event.preventDefault()
        let password = '';
        if (uppercase.checked){
            password = chooseChar(arr['uppercase_letter'], +length.value);
            randomPassword.textContent = password
        }
        if (uppercase.checked && number.checked){
            const keys = composeArrays(arr['numbers'], arr['uppercase_letter'])
            password = chooseChar(keys, +length.value)
        }
        if (uppercase.checked && number.checked && symbol.checked){
            const keys = composeArrays(arr['symbols'], arr['uppercase_letter'], arr['numbers'])
            password = chooseChar(keys, +length.value)
        }
        if (uppercase.checked && number.checked && lowercase.checked){
            const keys = composeArrays(arr['numbers'], arr['uppercase_letter'], arr['lowercase_letters'])
            password = chooseChar(keys, +length.value)
        }
        if (uppercase.checked && symbol.checked && number.checked && lowercase.checked){
            const keys = composeArrays(arr['symbols'], arr['numbers'], arr['uppercase_letter'], arr['lowercase_letters'])
            password = chooseChar(keys, +length.value)
        }

        randomPassword.textContent = password
    })
}

generatePassword()


 */

// Much better solution

const btn = document.querySelector('button');

function getElements(){
    const generatedPassword = document.querySelector('.password')
    const passwordLength = document.querySelector('#length')
    const uppercaseCheck = document.querySelector('#uppercase')
    const lowercaseCheck = document.querySelector('#lowercase')
    const symbolCheck = document.querySelector('#symbols')
    const numberCheck = document.querySelector('#numbers')
    return [generatedPassword, passwordLength, uppercaseCheck, lowercaseCheck, symbolCheck, numberCheck]
}

function generateLogic() {
    const [generatedPassword, passwordLength, uppercaseCheck, lowercaseCheck, symbolCheck, numberCheck] = getElements()
    const n = parseInt(passwordLength.value);
    let password = ''
    let arr = []
    if(uppercaseCheck.checked){
        arr.push(getRandomUpperCase)
    }
    if(lowercaseCheck.checked){
        arr.push(getRandomLowerCase)
    }
    if(symbolCheck.checked){
        arr.push(getRandomSymbol)
    }
    if(numberCheck.checked){
        arr.push(getRandomNumber)
    }
    for (let i = 0; i < n; i++) {
        const randomChar = arr[Math.floor(Math.random() * arr.length)]
        password += randomChar();
    }
    generatedPassword.textContent = password
}

btn.addEventListener('click', generateLogic)

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = ['#', '@', '!', '$', '^', '%', '*']
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// var a = 12;
// function foo(){
//     this.a = 21;
// }
//
// console.log(this.a); // 12

// var a = 12;
// function foo(){
//     this.a = 21;
// }
// const obj = {}
// foo.call(obj)
// console.log(obj.a); // 21
// console.log(this.a); // 12

