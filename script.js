// Group To-Do List - Open Source Project

// Full Name: Muhammad Abdurrahman
// Matric Number: CIS/STE/22/1159
let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    //Sadiq Shehu CIS/STE/22/1147
    document.getElementById('taskInput').focus();
    
    if (taskText === '') return;
    
    tasks.push({
        id: Date.now(),
        text: taskText,
        completed: false

        //CIS/STE/22/1152   Abubakar Aliyu Maidugu
        alert("✅ Task added successfully!");
    });
    
    input.value = '';
    renderTasks();
}
//Aminu Abubakar Yahaya  
function sortTasks() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks();
//Aliyu Ahmadu Babadoko
function toggleDarkMde(){
    document.body.classList.toggle('dark-mode');
}
function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    renderTasks();
}
//Hafsat Muhammad Khamis
function markAllCompleted() {
    tasks = tasks.map(task => ({...task, completed: true}));
    renderTasks();
    
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();

    //Sadeeq Abubakar Muhammed CIS/STE/22/1160
    <button onclick="deleteTask(${task.id})" style="background:#e74c3c; color:white; padding:6px 12px; border:none; border-radius:5px;">🗑️ Delete</button>
}

function clearAll() {
    if (confirm("Delete all tasks?")) {
        tasks = [];
        renderTasks();
    }
}
// Full Name: Muhammad Abdurrahman
// Matric Number: CIS/STE/22/1159
function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span onclick="toggleComplete(${task.id})">
    ${task.completed ? '✅ ' : ''}${task.text}
</span>

//Muhammad Abdurrahman  CIS/STE/22/1159
<span onclick="toggleComplete(${task.id})">${task.completed ? '✅ ' : ''}${task.text}</span>
            <button onclick="deleteTask(${task.id})" style="background:#e74c3c; padding:5px 10px; font-size:14px;">Delete</button>
        `;
        list.appendChild(li);
    });
    //Abdallah magaji saulawa CIS/STE/22/1158
    const remaining = tasks.filter(t => !t.completed).length;
    document.getElementById('taskCounter').textContent = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;
}

// Load tasks from localStorage (bonus feature)
window.onload = () => {
    const savedTasks = localStorage.getItem('groupTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        
     //Usman Bello Marafa  CIS/STE/22/1148
    const list = document.getElementById('taskList');
    list.innerHTML = '<li style="text-align:center; color:#888;">Loading saved tasks...</li>';
    }
    renderTasks();
};

// Save tasks automatically
setInterval(() => {
    localStorage.setItem('groupTasks', JSON.stringify(tasks));
}, 2000);
