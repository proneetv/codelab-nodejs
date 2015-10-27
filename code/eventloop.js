var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
   console.log('myEvent fired succesfully');
  
   // Fire the data_received event 
   eventEmitter.emit('newEvent');
}

eventEmitter.on('myEvent', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('newEvent', function(){
   console.log('newEvent fired succesfully');
});

// Fire the connection event 
eventEmitter.emit('myEvent');

console.log("------");
