const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize the object we're going to create

const myEmitter = new MyEmitter();

// add a listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //Emit the event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
