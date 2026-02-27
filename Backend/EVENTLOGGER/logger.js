const fs = require("fs");
const os = require("os");

// Now this event module is whole as a class itself
const EventEmiter = require("events"); // I can aslo write e in lowercase in eventemitter this cleary mentiones that we are aware this is a class and it has a lot of functionalities

// Now we due to inheritance I can pass on the functionalitie of EventEmitter to the Logger class
class Logger extends EventEmiter {
  // We just create a method to broadcast the message
  // So basically the idea of EventEmiter is to emit(throw) an event, which is message for now
  // Every single method in EventEmiter has its own methods for ex, emit method where for now we just want to broadcast the message
  log(message) {
    this.emit("message", { message });
    // The format in emit method is just key value pair
  }
}

// Lets create a ner object logger
const logger = new Logger();
const logFile = "./eventlog.txt";

// FOR NOW I AM DROPPING THIS VIDEO/CONCEPT/TOPIC AND WILL COME BACK LATER WHEN I COMPLETE BACKEND FOR SURE, FOR NOW I HAVE DROPPED ON 10:22 STAMP LECTURE NO : 100, WHEN I WILL COMEBACK WILL REQWATCH THE WHOLE VIDEO ANYWAYS BUT JUST WANTED TO PROVIDE THE EXACT TIMESTAMP
