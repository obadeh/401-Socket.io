
const sio = require('socket.io')(3000);

sio.on('connection', socket => {
  console.log('connected on: ', socket.id);
  socket.on('speak', payload => {
    sio.emit('message', payload);
  });
});

const school = sio.of('/school');
school.on('connection', socket => {
  console.log('connected to schoole: ',socket.id);


  socket.on('join',(room)=>{
    if(room === 'instructor'){socket.join('instructors',()=>{
      console.log('joined to instructors room');
    });}
    if(room === 'std'){socket.join('stds',()=>{
      console.log('joined to stds room');
    });}
  });

  socket.on('submition',submition);
  function submition(submition){
    socket.to('instructors').emit('msg', submition);
  }

  socket.on('graded',(payload)=>{
    socket.to('stds').emit('msg', payload);
  });

  // sio.on('connection', (socket)=>{
  //     console.log('connected to ins room');

  //     socket.join('istructor');
  //   });

  // sio.on('connection', (socket)=>{
  //     socket.join('std');
  //   });


  socket.on('school-speak', payload => {
    school.emit('message', payload);
  });
});

