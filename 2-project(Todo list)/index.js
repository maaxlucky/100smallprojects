"use strict";

function toDo(element, title, isDone, parent){
    return {
        el: document.createElement(`${element}`),
        title: title,
        isDone: isDone,
        toggle: function () {
            if(!isDone) return isDone === true
            else return isDone === false
        },
        create: function () {
            this.el.textContent = this.title
            parent.appendChild(this.el)
        },
        btnCreate: function(content, cls, dataset){
            const btn = document.createElement('button')
            btn.textContent = content
            btn.classList.add(`${cls}`)
            btn.dataset.key = `${dataset}`
            this.el.appendChild(btn)
        }
    }
}

let ToDoArray = {
    array: [],
    pushToArray(task) {
        return this.array.push(task);
    },
    removeFromArray(index){
        return this.array.splice(index, 1)
    }
};


(function() {
    const title = document.createElement('h1')
    const todoTitle = document.createElement('input')
    const addBtn = document.createElement('button')
    const todoTasks = document.createElement('ul')
    addBtn.textContent = 'Add';
    title.textContent = 'To Do List';
    document.body.appendChild(title)
    document.body.appendChild(todoTitle)
    document.body.appendChild(addBtn)
    document.body.appendChild(todoTasks)
}())

function querySelectElements() {
    const addBtn = document.querySelector('button')
    const todoTitle = document.querySelector('input')
    const todoTasks = document.querySelector('ul')
    return [addBtn, todoTitle, todoTasks]
}



function addTask(){
    const [addBtn, todoTitle, todoTasks] = querySelectElements()
    addBtn.onclick = function () {
        const task = toDo('li', todoTitle.value, true, todoTasks)
        ToDoArray.pushToArray(task)
        todoTitle.value = ''
        renderTasks()
    };
}


function makeEvents(){
    const btns = document.querySelectorAll('button[data-key]')
    btns.forEach((button) => {
        button.addEventListener('click', function (event){
            if (button.dataset.key === 'status'){
                const task = document.querySelector(`li[data-index="${button.classList[0]}"]`)
                task.classList.toggle('true')
            }
            else if (button.dataset.key === 'remove'){
                console.log(ToDoArray.array)
                ToDoArray.removeFromArray(button.classList[0])
                console.log(ToDoArray.array)
                renderTasks()
            }
        })
    })
}


function renderTasks() {
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    const arr = ToDoArray.array
    for (let i = 0; i < arr.length; i++) {
        arr[i].el.dataset.index = `${i}`
        arr[i].create()
        arr[i].btnCreate('Done', i, 'status')
        arr[i].btnCreate('Remove', i, 'remove')
    }
    makeEvents()
}

addTask()