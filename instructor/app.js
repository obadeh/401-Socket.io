'use strict';

const sio = require('socket.io-client');
const faker = require('faker');

const client = sio.connect('http://localhost:3000');
const school = sio.connect('http://localhost:3000/school');



school.emit('join', 'instructor');

school.on('msg',(submition)=>{
    // console.log('msg : ', msg);
   school.emit('graded',`assignment:  ${submition} grad: ${faker.random.number(10)}`);
})


// school.emit('school-speak', faker.hacker.phrase());
// sio.to('istructor').emit('gradding');

// school.on('message',playload=>{
//     console.log('playload : ', playload);
// })