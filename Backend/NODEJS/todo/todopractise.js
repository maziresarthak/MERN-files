const fs = require("fs");
const filepath = "./taskspractise.json";

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else if (command === "list") {
  listTasks();
} else {
  console.log("Command not found!");
}

function loadTasks() {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

function addTask(task) {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log(`Task added : ${task}`);
}

function saveTasks(tasks) {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
}

function listTasks() {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}

function removeTask(taskNo) {
  const tasks = loadTasks();

  if (taskNo < 1 || taskNo > tasks.length) {
    console.log("Invalid task number!");
  }

  const removedTask = tasks[taskNo - 1].task;

  const updatedTasks = tasks.filter((task, index) => index !== taskNo - 1);

  saveTasks(updatedTasks);
  console.log(`Task number ${taskNo} - ${removedTask} has been removed!`);
}
