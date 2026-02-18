// BAsics about DOM : https://youtu.be/DcjNkHtDj8A?si=M6kKMQatUt85Wmlo
// Very imp DOM is not html and html is not DOM, whatever you do as a markup language, this language is been taken or this piece of code is also taken up by your browser and internally browser runs c++ and through tha cpp a whole document tree in the memory is been generated and that generated tree is called as DOM
// Now as in the diagram dom does 2 primary things get the element and event listening
// Evenet listening simply mean I want to listen to an event that event could be a mouse move, a cursor move, you hove onto some element, you entered something from the keyboard, a keyboard key was pressed, the page actually just got loaded, you have moved onto different place, or you are just about to leave the web page, there are a whole lot of events that we have to lisiten
// Now once we actually listen to an event then only we want to do certain things for ex we want to get an element that means I have already I have taken the reference of that elemnt, i want to delete that element, add that element, remove that elemen or maybe want to add css to that element

// example 1

// let hold = document.getElementById("changeTextButton");
// console.log(hold); O/P is the whole element
// This event listener take two parameter, one is what is the event adn 2nd is I want to write some block of code that should be executed wen the event is performed that is 2nd parameter is a funciton
//  THis is an example of higher order function
// Now  I have to have to pass a normal function not an arrow function because you need to grab the context about where this event is going on
// document.getElementById("changeTextButton").addEventListener("click", () => {
//   console.log(this); // This shows whener I use arrow functions this(the context) is always pointing to the global this(ie window object) while on the other hand when I use function then it points to the current context who is calling it in this case changetext button is calling and not the other button
// });

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this); // Nothing happens but as soon as I click on change text button it gets me the button that is my console log coz thats the reference now it knows exactly what button you are talking
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    // console.log(paragraph.textContent);
    paragraph.textContent = "The paragraph is changed";
  });

// Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    // let hold = document.getElementById("citiesList");
    // console.log(hold); // Here its giving me whol ul but I want t traverse the dom not whole list
    let citiesList = document.getElementById("citiesList");
    // console.log(citiesList.firstElementChild);// Now I am getting the required list element ie newyork
    // console.log(citiesList.firstElementChild.classList); // It gives list of the classes that are there on the element
    citiesList.firstElementChild.classList.add("highlight");
  });

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.padding = "5px";
});

// Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs"; // Line 50 and 51 is creation of the element
  document.getElementById("shoppingList").appendChild(newItem); // Line 52 is insertion of the list item
  // Id doesn't actually add any element notice here the append child actually acccepts a node coz its a DOM, when we say we are adding html, head and body there are called as node and in the wrold of DOM coz its a memory html is being proccessed, every element becomes a node and thats what it is expecting that hey you will be passing me node and on line 50 and 51 is what we have created a node this is not an html element now, this is in memory this is being proccessed html known as node. thats why js doent predeclare whats going to be the element that comes up, types are not there
});

// Example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// Example 6
//  I want to grab an element and based on what something happens on that, that's your event hadling and events can be of many types
// document.getElementById("clickMeButton").addEventListener("click", function () {
//   alert("chaicode");
// }); click and alert shown

// document
//   .getElementById("clickMeButton")
//   .addEventListener("mouseover", function () {
//     alert("chaicode");
//   }); hover and alert shown

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

// Example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event) //Truns out the event that you are looking out for you can actually grab that, what event happened and where that event happened, now here when I expand the pointer I can see a target down so the target shows which list item I clixked so now I will use it
  // console.log(event.target);
  // Now what matches method does is I can match only for the particular selector, selectors can be an id, class anything.
  // So now I am matching that hey both casses should be there I will find that somebody has event been clicked, I want to finr the event target and the event target should be the teaItem because there could be more elements in the list which are not useful for us.(event.target && event.target.matches('.teaItem'))
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected : ${event.target.textContent}`);
  }
});

// Example 8

// The step 1 in most of these form based cases is to stop the default behaviour of the form which is submit so the event behaviour in this case is to have a default behaviour to submit it
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // let feedback = document.getElementById("feedbackInput");
    // console.log(feedback); // SO now when I submit the form input is been grabbed even though label had same class still input is been grabbed
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback); // Now here as basic common sense feedback will now hold the value ie the inpu I am writing for ex "Sarthak is innocent" this value will be hold and thats what we want
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is : ${feedback}`; // This will display the feedback and done this is what we wanted
  });

// Example 9

// We are just waiting for a DOM being loaded
// This time not getelementbyid we can actually have event listener anywhere and we are directly put an event listener directly on document itself coz we want to listen there
// As soon as the DOM laods then only this message will change
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight"); // Basically what here happens is first when we press the button it will add the highlight class and when we press again it removes the class so this is nothing but toggle
  });
