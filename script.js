// Run the script only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');  // <-- THIS is the required change

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li and li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to button
    addButton.addEventListener('click', addTask);

    // Add event listener to input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
