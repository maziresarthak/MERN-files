// Jecha project 1 che vidoes parat ekda baghitla tevha sagla ekdam crystal clear jhala ahe so jar agdich kashyat doubt asel then just rewatch the videos
// Json badal basic info : https://youtu.be/r4MLHHLctKw?si=vkXdWFcWeIJHqqTH and https://youtu.be/iiADhChRriM?si=xymW48iQG-PwmXNK
// Easy video to understand local storage : https://youtu.be/PCwhTWT3yhI?si=sI9HW0WIRjVF-9Vo
/* Now what we want to do is as soon as the page loads, I want to read from the local storage, grab all the tasks, store the tasks inside the tasks array and then immediately after that we want to run a loop, inside the loop we will read all the individual tasks from this array and would love to call my method on each of these tasks renderTask() so it can actually go ahead and render it */
// Now as soon as the page loads we want to perform all the code so we wrap the whole code in document as below

document.addEventListener("DOMContentLoaded", () => {
  // Our first task is to grab all the elements
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Now here we want to convert string to original data structure thats why we use parse, so the array basically is empty or if there are previous tasks saved in the local storage then we want to read them and display them thats why we use JSON.parse(xyz)

  tasks.forEach((task) => renderTask(task)); // This loop for rendering the tasks discussed below

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.toLowerCase().valuetrim(); // I want to grab the input value when button clicked and trim extra end spaces
    if (taskText === "") return; // Return means if input is empty just execute nothing after that, we are exiting the program
    // For every new task there shold be some properties, first every new task should have unique id, second ofc a text which is taskTest and third completed status which will be true or false, but ofc at start it will be false
    const newTask = {
      id: Date.now(), // This gives me unique string based on the date, so I will never get the same d as the time passes it inc that
      text: taskText,
      completed: false, // New task ahe so ofc lagechc completed nasnar na so completed : false
    };
    tasks.push(newTask); // Now ofc every new task should be pushed into the tasks array
    saveTasks(); // So after line 41 as soon as I add a new task I want it to go into local storage thus saveTasks() method is called right after
    renderTask(newTask); // newTask which is a parameter here which is a object above and now it is assigned to task parameter of renderTask() below
    // addTaskButton dablyavar task properly load hoyla apan ithe render taks method varpartoy ani ha method kay ahe he line 74 nantar kalel, hi method ithe nahi vaparli tar magh aplyayla dar veli reload karava lagel to add a new task
    todoInput.value = "";
    // As a user is done with adding a task I want to clean the input again to add a new task so its value assigned to empty string
  });

  // Now we want to add this into a local storage, save any kind of updaates like completed status true or false into this local storage
  // Local storage gives me api, basic idea of api : https://youtu.be/0PaWV3wIfkM?si=JUNHmH2SVGdPWiEJ
  // Ata local storage madhe add karnya sathi apan methodch ka vaprtoy karan aplyayla sarkhya values update karavyalagta local storage madhe so method vaparli ki its easy to call that method frequently
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Now we use setItem to add things in the local storage, it takes as (key, value), where key is normally a string but it can be anything but the value should be strictly a string.
    // Now to conver anything to string we use JSON.stringify and to convert that string to the normal data type we use JSON.parse, we will learn about JSON in future
    // So this is like getters and setters here we are setting the tasks to local storage and we get them on the tasks array at line 11
  }

  // Now I will take the tasks from local storage and render them
  function renderTask(task) {
    const li = document.createElement("li"); // We create list elements for new taska which will ofc be settled in these li
    // Now I want to add attributes to these list elements
    li.setAttribute("data-id", task.id); // We have a task we are extracting id out of it, we want a unique id for each task and we will use this for the filtaration of array later

    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `; // li innerhtml cha evdhach artha hoto ki its like adding li tag in ul tag in the html file ani inner html mhanjech ki <li> he atla content </li>

    if (task.completed) {
      li.classList.add("completed");
    }
    // Ata ha sectio cousrse madhe nhavta pan chatgpt ne he if statement dhila, khup imp, main motive ha ahe ki jevha task ata complete jhala ani me line thourgh kela click karun pan jar me reload kela ki te line thorugh nighun jata so te na hoyla he if statement is good

    li.addEventListener("click", (event) => {
      // Now as we can see in upper line the whole li consist of the span and button so the whole task slot, we want to specifically target the slot except the button
      if (event.target.tagName === "BUTTON") return;
      task.completed = !task.completed; // Hyacha ekach kam ahe ki local storage madhe completed cha true ani false karaycha as we click the li, baki functionality kiva render madhe kahich farak nahi so hyala comment jari kela tari line through hi yenarch pan local storage madhe completed status la jar update karaycha asle then ts mandatory to do this setp
      li.classList.toggle("completed"); // Actually completed class hi html madhe nahiye pan css file madhe khali last la li la attached ek class apan tayar karto thats why we get the line though and low opacity status
      // This is toggle state this will cut out the task if we click on the li slot anywhere except the button and vicversa
      // Its like it adds the completed class and alos removes it thats why toggle
      saveTasks(); // There is some property thats to be modified so we need to save it in local storage, even a slightest modification to the array it needs to be called
    });

    // Now for button querry selector that is now we are working for the if condition in li.addEventListener on line 53
    li.querySelector("button").addEventListener("click", (event) => {
      event.stopPropagation();
      //Watch these 2 videos to get basic idea of event bubling : 1> https://youtu.be/ndfGreSllqM?si=AeO8NckokdNqv-EN 2> https://youtu.be/rS_4YfbEo2U?si=3E8_OQQa2yCcqVjr
      tasks = tasks.filter((t) => t.id !== task.id);
      // Filter badal ekda mdn vach pan tari basically filter ek method ahe jyar apan first ek var insert kartoand tha var loops through the array ani magh apan => he laun kahitari condition pass karto ani only the true values for that condition will be returned
      // Line 65 cha artha ha ahe ki ata apan delete button var ek eventlistener lavla ahe mala kay karaychay ki jevha me eka task/li cha delete button dabil tevha ek new tasks array anla pahije jyat to deleted task nasun baki sagle task asle pahije. Mhanjech kay ki pratyek task chi ek unique id ahe, ata acc to the defination of filter method me kay kartoy jevha jevha delete button me dabil tevha tasks array filter hoto jyat me delete var click keleli ji task id ahe t.id he !== task.id asli pahije ani sagla filter houn bakiche tasks disle pahije. Sopya bhashet jya task var me delete button me click karto to task sodun baki sagle filter jhale pahije which is the true condition adn for filter only true values will be returned and thus ti false value mhanjech delete clicked task he gayab honar ani fakt filtered tasks aplya array madhe rahtil
      li.remove(); // So ofc deleter event listener aslyamule filter jhalya nantar apan lagech to li jyachyavar delete button click karto to remove hoto
      saveTasks(); // Ani ofc to task fakt array madhun remove hoto pan aplyayla tyala local storage madhun remove karaychay mhanunach apan saveTasks() vapartoy
    });

    todoList.appendChild(li); // We are appending li child in the parent ul
  }
});
