const EventEmitter = require('events');
// Imports class from events module
const emitter = new EventEmitter(); // Creates an instance of the class

// register a listener for bellRing event
emitter.on('bellRing', (arg /* getting event parameter */) => {
    console.log(`Let's run home because ${arg}`);
});

// register an event bellRing
emitter.emit('bellRing' /* event name */, 'second period ended' /* event parameter */);

const School = require('./school');

const school = new School(); // Creates an instance of the class

school.on('bellRing', ({ period, text } /* getting event parameter */) => {
    console.log(`Let's run home because ${period} ${text}`);
});

school.startPeriod(); // raise an event
