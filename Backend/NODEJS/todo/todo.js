// Piyush garg's playlist for node js is good if want to learn from basic or for rev : https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=0ZfROMY0jxnGkiLJ, concepts like handling files synchoronosly and asynchronosly is well exlained there
const fs = require("fs");
const filepath = "./tasks.json";

const command = process.argv[2];
const argument = process.argv[3]; // go to line 28

// Here while writing the code at the first place none of the functions like addTask(), listTasks(), removeTask() were not defined but we still mention them there these methods are actually not defined this is also called as creating interfaces. Its goot to structure program with methods
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  // So again this is a rev we know that browser madhun ji id yete ti ek string aste so we need to parse it. For ex in jsprojects, project no 3 1script.js madhe lune 41 kade ni baghitla ki kalta ki button dabla ki aplyayla tya product chi id havi aste browser kadhun tevha ti id eka string format madhun yete thats why we need to parse it. This is also same for command line
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}

// Actually this variable declaration shoould be done at the top itself, it;s a good practise to have all the var definations and iniitialisations at top but for now I wanted to understand the flow so its ok for understand purpose, but while project or imp time dont do this
// Now coming to the point turns out in the node world we can grab the commands and the argument pretty easily
// process.argv var hove kela ki we can see its functionality so in simple words basically it returns an array where :
// 1> 0th element is the execution path wheer node is installed
// 2> 1st element is the basic file/file path
// 3> Remaining elements are additional command like arguments, like for this ex add will be on 2nd postion and "Go to gym" on 3rd and so on...
// const command = process.argv[2];
// const argument = process.argv[3];
// Nonono I did this it gave me error so yeah ofc var declaration should be at the top because as per error it cannot access 'command' before initialistation

// I could  have made a normal fn but just for fun lets make an arrow one
// Turns out arrow functons are not appropiate for this code particularly because arrow functions cannot be written anywhere as we want as they are actually callback functions which is assigned to a var, like exclude nameless arrow functions but arrow functions with name are actually like var and then ofc var should be declared at the top so that to be initialised as discussed in line 28 itself

function loadTasks() {
  // Turns out reading a file equally danger as making a web req so we create a save environment using try catch
  try {
    // We are using readFileSync bcoz we wnat it to use the main thread and we dont want to move further until unless its done, watch piyush playlist video if want the revision
    const dataBuffer = fs.readFileSync(filepath); // Don't know much about dataBufer but this is an object which is not a regular string we need to convert it into a string so we can further go ahead and read it
    const dataJSON = dataBuffer.toString(); // This is dataJSON which is different from regular JSON so we need to convert it to JSON
    return JSON.parse(dataJSON); // So we parsed that dataJSON string to regular JSON
  } catch (error) {
    return [];
  }
}

function addTask(task) {
  const tasks = loadTasks(); // This will return me a simple JSON ofc and also an array too so now whatever task we pass on should be pushed to the array as defined by the below line
  // tasks.push(task);
  tasks.push({ task }); // Pushing an object to the array is an better way which would be easier to reference, ani he kam kasa karta ki like task 'task' hya word chi ek key sarkhi banat rahnar ani je actual task ahe te value asnar
  saveTasks(tasks); // Now again here also saveTasks() was not defined but we still create the interface, interface does not have definations they just have the names of it and what vaguely we are going to do there
  console.log("Task added :", task);
}

function saveTasks(tasks) {
  // Now we need to write the data in the JSON file
  // But first of all we need to prepare the data in that format, like ofc we need it in string format that is dataJSON in the tasks.json file
  const dataJSON = JSON.stringify(tasks); // It's still literally a string, the whole thing actually changes the format when you write things in the os itself
  fs.writeFileSync(filepath, dataJSON); // Again sync of like do this first its imp, its not about async or sync whats better but its all about use case
  // Now as we hover over writeFilesync we see that we need two parameters the path and the data we want to write in that file
}

function listTasks() {
  const tasks = loadTasks(); // So here ofc I am expecting an array, things change when we know the data structure whats coming in and going out
  // So for forEach again we can give 2 parameters first task which is ofc the value(remember the object task) and second is the index
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`)); // Like we know these are tasks and acc to normal maths we start from 1 so yeah thats why 'index + 1' and for 'task.task' remember task is not a normal string but an object and again 'task' is the key so yeah 'task.task'
}

// I took help of chatgpt to create this function if you want refer it : https://chatgpt.com/share/6990b6a1-ce00-8004-8a40-f6c736e06b9f
// slice method khupach complex vatla mhanun I am not using it, hyachya nantar kadhi garaz padli ki I can just use mdn docs and chatgpt, BUT IF NEEDED
function removeTask(taskNo) {
  // taskNo ha actual taskNo ahe like tasks 1 pasn start hot ahet na so yeah thats what taskNo is, it not index of the tasks array
  const tasks = loadTasks(); // Here bascially we grab the array

  if (taskNo < 1 || taskNo > tasks.length) {
    // Ata ofc taskNo is not an index so it will never be 0 or taskNo will never be greater than the array length is any of this is true we will provie an error
    console.log("Invalid task number!");
  }

  const removedTask = tasks[taskNo - 1].task; // Now I just want to grab the task that I will remove by providing the taskNo ofc because I want to display that particular message which I gave on line 83. Basically the taskNo which I will give and the task which I want to be remove will have index which will be equal to taskNo - 1 ofc!!!!. So jo taskNo me deil tyacha 1 minus mhanjech index access karun task key access kar and grab the task simple

  const updatedTasks = tasks.filter((task, index) => index !== taskNo - 1); // So ofc ik what filter does it provides the true values and I also know the syntax if not refer mdn docs but we will not discuss about that here. Basically we are passing a task var which will be assigned to eevery task ofc ik this its like iterator its like the loops and all shit like we are passing a task, and then we know we can grab the index too as in form second parameter and then return me the tasks whoose index not matches taskNo - 1. So the conclusion iterate over the array for each task and I am passing every task and give me a new fresh array whoose index is not matching to task I removed. Common this is basic logigc not that hard refer chatgpt if requires this is easy

  saveTasks(updatedTasks); // And ofc save the new fresh filtered tasks array.
  console.log(`Task number ${taskNo} - ${removedTask} has been removed!`); // And ofc the message thats why I grabbed the removedTask
}

// Ekda last conclusion ani program flow ssangto. loadTask() aplyayla ek JSON parsed file return kartoy, ata starting madhe ogc array ha empty ahe so read karayla kahi naslya mule catch section run hoto. So addTask() madhe jevaha apa jato tevah tasks = loadTask() mhanjech empty array load hoto. Ata magh hya array madhe apan task takto ani magh pudhe sagli process mahitich ahe. Ani magh ek filled tasks array loadTask() madhe parat yeto ani ya veli try section run hoto(exceptions ahet kadhi kadhi file corrup hou shakte mhanunch kay dar veli try nahi run honar thats whu we use try catch). Basically loadTask() kay return kartoy first of all to file la read karto je ki ek data buffer object ahe ani magh tyala normal string madhe apan convert karto ie dataJSON  ani magh tyala JSON file madh parse karto. Magh addTask() vagere process hoti ani jevha apan saveTasl() madhe yeto tevha tya JSON la apan parat normal string dataJSON madhe anto ani magh write karto. Mhanjech kay ki dataJSON he normal string ahe. These are basically my conceptions which might be false but for now ig this is what it is
// And also conside loadTasks() as just the tasks array
