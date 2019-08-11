import serialport from 'serialport';

const item = '/dev/tty.Bluetooth-Incoming-Port';
const item2 = '/dev/cu.Bluetooth-Incoming-Port';

const port = new serialport(item2);
port.on('data', (sample) => {
  console.log(sample);
});

// var portName = '/dev/tty.Bluetooth-Incoming-Port';

// const sp = new serialport(portName);
// console.log(sp);
// ls /dev/tty.*
// ls /dev/cu.*