document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = input.value.trim();
        if (todoText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(deleteBtn);
        li.addEventListener('click', () => li.classList.toggle('completed'));

        todoList.appendChild(li);
        input.value = '';
    }
});

/*//
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});*/


const messages = [
    "Great job!",
    "Keep it up!",
    "You're awesome!",
    "Way to go!",
    "Fantastic!"
];

function addTodo() {
    const todoText = input.value.trim();
    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMsg);
        }
    });

    todoList.appendChild(li);
    input.value = '';
}

