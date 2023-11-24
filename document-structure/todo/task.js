const form = document.getElementById("tasks__form");
const inputField = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

let newTask = document.createElement('div');
newTask.classList.add('task');
let taskTitle = document.createElement('div');
taskTitle.classList.add('task__title');
newTask.appendChild(taskTitle);
let taskRemove = document.createElement('a');
newTask.appendChild(taskRemove);
taskRemove.outerHTML = `<a href="#" class="task__remove">&times;</a>`;

let cloneTask;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputField.value.trim()) {
    cloneTask = newTask.cloneNode(true);
    cloneTask.firstChild.innerText = inputField.value;
    taskList.appendChild(cloneTask);
    
    form.reset();

    let removeControl = cloneTask.lastChild;
    
    removeControl.addEventListener("click", () => {
      removeControl.closest(".task").remove();
    });
  }
}) 