const EventEmitter = require('events');
// Imports class from events module

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
        // raise an event
        this.emit('bellRing', {
            period: 'first',
            text: 'period ended',
        });
    }
}

module.exports = School;
// Exports School class
