//every action is event
//listener is the callback function which perform events
const events = require("events");
const greetList1 = () => {
  console.log("good morning students!!");
};
const greetList2 = () => {
  console.log("bye!!");
};

//eventEmitter is a object created and EventEmitter is a constructor so use new keyword
const eventEmitter = new events.EventEmitter();
//at a time we can register 10 listener to event we can also change the limit of the register
//on method to add listener, greet is user defined event
eventEmitter.on("greet", greetList1);

//to add listerner in event , on also do the same thing
eventEmitter.addListener("greet", greetList2);

//calling the event with object[eventEmitter] and function emit
//greet event is registered with the two istener
//revoveListener  will revove all the listener registered with the greet event
//eventEmitter.removeListener("greet");
eventEmitter.removeListener("greet", greetList1);
eventEmitter.emit("greet");
