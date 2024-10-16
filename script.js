// dom elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// task event listener
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; 
    }
});

// task to the list
const addTask = (taskText) => {
    const li = document.createElement('li');

    // checkbox for task completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed'); 
    });

    // span to hold task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // delete button for task removal
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);  // Remove the task from the list
    });

    // append elements to the task list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // add the task item to the list
    taskList.appendChild(li);
};
