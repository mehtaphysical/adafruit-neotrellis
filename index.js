const { spawn } = require('child_process');
const EventEmitter = require('events');

module.exports = class NeoTrellis extends EventEmitter {
  constructor() {
    this.trellis = spawn('python3', [__dirname + '/index.py']);

    trellis.stdout.on('data', data => {
      const number = data.toString().split(' ')[1].trim();
      trellisEvents.emit(`Button${number}`);
      trellisEvents.emit('press', { number });
    });
  }

  changeColor(index, r, g, b) {
    trellis.stdin.write(`${index} ${r} ${g} ${b}\n`);
  }
}
