'use strict';

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const localStorage = window.localStorage;

//  task template

function creatTaskTemplate (value) {
    const li = document.createElement('li');
        const link = document.createElement('a');
        const icon = document.createElement('i');

        li.className = 'collection-item';
        link.className = 'delete-item secondary-content';
        icon.className = 'fa fa-remove';

        li.textContent = value;
        link.appendChild(icon);
        li.appendChild(link);
        taskList.appendChild(li);
}

// add task

function addTask(evt) {
    if (taskInput.value === '') {
        alert('Add a value');
    } else {
        creatTaskTemplate (taskInput.value);

        // Store in LS
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    evt.preventDefault();
}

// remove task

function removeTask(evt) {
    if (evt.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            evt.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTaskFromLocalStorage(evt.target.parentElement.parentElement);
        }
    }
}

//  clear all tasks

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear LS
    clearTasksFromLocalStorage();
}

// Filter tasks

function filterTasks(evt) {
    const text = evt.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

// Local Storage 

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
       tasks = [];
   } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
       tasks = [];
   } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
       tasks = [];
   } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function (task) {
      creatTaskTemplate(task);
   });
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Event Listeners

function loadEventListener() {
    document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

loadEventListener();