const { spawn } = require('child_process');
const EventEmitter = require('events');

module.exports = class NeoTrellis extends EventEmitter {
  constructor() {
    super();
    this.trellis = spawn('python3', [__dirname + '/index.py']);

    this.trellis.stdout.on('data', data => {
      const number = data.toString().split(' ')[1].trim();
      this.emit(`Button${number}`);
      this.emit('press', { number });
    });
  }

  changeColor(index, r, g, b) {
    this.trellis.stdin.write(`${index} ${r} ${g} ${b}\n`);
  }
}
