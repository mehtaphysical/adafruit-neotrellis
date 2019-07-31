import time
import sys
import select

from board import SCL, SDA
import busio
from adafruit_neotrellis.neotrellis import NeoTrellis

i2c_bus = busio.I2C(SCL, SDA)
trellis = NeoTrellis(i2c_bus)

def clicked(event):
    sys.stdout.write('Clicked {0}\n'.format(event.number))
    sys.stdout.flush()

for i in range(16):
    trellis.activate_key(i, NeoTrellis.EDGE_RISING)
    trellis.pixels[i] = (0, 0, 0)
    trellis.callbacks[i] = clicked


while True:
    trellis.sync()
    if select.select([sys.stdin,],[],[],0.0)[0]:
        args = sys.stdin.readline().split()
        trellis.pixels[int(args[0])] = (int(args[1]), int(args[2]), int(args[3]))
    time.sleep(.02)
