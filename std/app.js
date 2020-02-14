

const sio = require('socket.io-client');
const faker = require('faker');

const client = sio.connect('http://localhost:3000');
const school = sio.connect('http://localhost:3000/school');


school.emit('join', 'std');

setInterval(() => {

  school.emit('submition',faker.lorem.word());

}, 1000);

school.on('msg',(msg)=>{
  console.log('msg : ', msg);
});
