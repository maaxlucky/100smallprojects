"use strict";

if (!localStorage.getItem('tasks')){
    localStorage.setItem('tasks', JSON.stringify([]))
}

let ToDoArray = {
    array: JSON.parse(localStorage.getItem('tasks')),
    pushToArray(task) {
        this.array.push(task);
        return localStorage.setItem('tasks', JSON.stringify(this.array))
    },
    removeFromArray(index){
        this.array.splice(index, 1)
        return localStorage.setItem('tasks', JSON.stringify(this.array))
    }
};


function toDo(title, isDone){
    return {
        index: 0,
        title: title,
        isDone: isDone,
    }
}
renderTasks()
addTask()
makeEvents()

function querySelectElements() {
    const addBtn = document.querySelector('.add')
    const todoTitle = document.querySelector('input')
    return [addBtn, todoTitle]
}


function addTask(){
    const [addBtn, todoTitle] = querySelectElements()
    addBtn.onclick = function () {
        const task = toDo(todoTitle.value, false)
        ToDoArray.pushToArray(task)
        todoTitle.value = ''
        renderTasks()
    };
}


function createBtns(element, index){
    const btnToggle = document.createElement('button')
    const btnRemove = document.createElement('button')
    btnToggle.textContent = 'Done'
    btnRemove.textContent = 'Remove'
    btnToggle.classList.add(index)
    btnRemove.classList.add(index)
    btnToggle.dataset.key = 'toggle';
    btnRemove.dataset.key = 'remove';
    element.append(btnToggle, btnRemove)
}

function makeEvents(){
    const ul = document.querySelector('ul')
    const arr = ToDoArray.array
    ul.addEventListener('click', function (event){
        if(event.target.dataset.key === 'toggle'){
            console.log(event.target.classList[0])
            const index = event.target.classList[0]
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].index === +index){
                    arr[i].isDone = !arr[i].isDone
                    localStorage.setItem('tasks', JSON.stringify(arr))
                    renderTasks()
                }
            }
            event.stopPropagation()
        }
        else if(event.target.dataset.key === 'remove'){
            const index = event.target.classList[0]
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].index === +index){
                    ToDoArray.removeFromArray(index)
                    renderTasks()
                }
            }
            event.stopPropagation()
        }
    })
}



function renderTasks() {
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    const arr = ToDoArray.array
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        li.textContent = arr[i].title
        if (arr[i].isDone) li.classList.toggle('true')
        createBtns(li, i)
        ul.appendChild(li)
    }
    setIndex()

}

function setIndex(){
    const arr = ToDoArray.array
    for (let i = 0; i < arr.length; i++) {
        arr[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(arr))
}

