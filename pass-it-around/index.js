// server.js
const express = require('express');
// Define Express App
const app = express();
const PORT =  3000;
// app.listen(PORT, () => {
//   console.log('Server connected at:',PORT);
// });


//INDEX
app.get('/', (req, res) =>{
    res.send(`<hr /><center><h1>99 bottles King Of Beer budweiser on the wall!</h1>
    <a href=/98>Take 1 King, pass it to the Queen</a></center>`);
})

app.get('/:number_of_bottles', (req, res) => {
    let beer = req.params.number_of_bottles
    if(beer <=0){
        res.send(`<hr /><h1><center>King is Over!!</center></h1> <center><a href= /> Click Here To Start Over</center>`)
    }else {
        res.send(`<hr /><center><h2>${beer} King of Beer BUD-WISE-SIRR on the Wall!</h2> <a href=/${beer - 1}>Take 1 King, Pass it to the Queen</a></center>`)
    }
})


//PORT LISTENER
app.listen(PORT, ()=>{
    `Running on PORT: ${PORT}`;
})