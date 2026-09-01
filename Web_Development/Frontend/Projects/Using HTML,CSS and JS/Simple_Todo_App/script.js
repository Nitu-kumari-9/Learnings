// Input ko select kar rahe hain
const input = document.getElementById("taskInput");

// Task list ko select kar rahe hain
const list = document.getElementById("taskList");


// Task add karne ka function
function addTask() {

    // Input se task le rahe hain
    let task = input.value;

    // Agar input empty hai
    if (task === "") {
        alert("Please enter a task");
        return;
    }


    // Naya li element bana rahe hain
    let li = document.createElement("li");

    // Task ko li ke andar daal rahe hain
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete" onclick="deleteTask(this)">
            Delete
        </button>
    `;


    // Task ko list mein add kar rahe hain
    list.appendChild(li);


    // Input ko empty kar rahe hain
    input.value = "";
}


// Task delete karne ka function
function deleteTask(button) {

    // Task ke parent ko delete kar rahe hain
    button.parentElement.remove();
}
