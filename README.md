# NeoTrellis

## Examples

```js
const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();

trellis.on('Button0', () => {
  // button 0 pressed
});

trellis.on('press', data => {
  // any button pressed
  // number is the button pressed
  const { number } = data;
});

// change button 0 to red
// (index, r, g, b)
trellis.changeColor(0, 255, 0, 0)

```

## API

`.changeColor(index, r, g, b)`

* `index` - the buttons index
* `r` the red value
* `b` the blue value
* `g` the green value

### Events

* `ButtonX` - fired when `ButtonX` is pressed where
  `X` is the buttons index
* `press` - fired when any button is pressed
