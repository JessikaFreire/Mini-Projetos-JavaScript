'use strict';

let database = [];

const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database));

const createItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${task}</div>
        <input type="button" value="X" data-index=${index}>
    `;
    document.getElementById('todoList').appendChild(item);
}

const clearTasks = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const updateScreen = () => {
    clearTasks();
    const database = getDatabase();
    database.forEach((item, index) => createItem(item.task, item.status, index));
}

const insertItem = (event) => {
    const tecla = event.key;
    const text = event.target.value;
    if (tecla === 'Enter') {
        const database = getDatabase();
        database.push({ 'task': text, 'status': '' });
        setDatabase(database);
        updateScreen();
        event.target.value = '';
    }
}

const removerItem = (index) => {
    const database = getDatabase();
    database.splice(index, 1);
    setDatabase(database);
    updateScreen();
}

const updateItem = (index) => {
    const database = getDatabase();
    database[index].status = database[index].status === '' ? 'checked' : '';
    setDatabase(database);
    updateScreen();
}

const clickItem = (event) => {
    const element = event.target;
    console.log(element.type);
    if (element.type === 'button') {
        const index = element.dataset.index;
        removerItem(index);
    } else if (element.type === 'checkbox') {
        const index = element.dataset.index;
        updateItem(index);
    }
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

updateScreen();