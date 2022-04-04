const express = require('express');
const app = express();
const PORT = 3000;



//INDEX
app.get('/', (req, res) =>{
    res.send(`<h2>99 bottles of king of beer budweiser on the wall!</h2>
    <a href=/98>Take 1 King, pass it to the Queen</a>`);
})

//PORT LISTENER
app.listen(PORT, ()=>{
    `Running on PORT: ${PORT}`;
})