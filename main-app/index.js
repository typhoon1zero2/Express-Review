const express = require('express');
const app = express();
const PORT = 3000;


function fibonacci(num) {

    let previous_first = 0, previous_second = 1, next = 1;

    for(let i = 2; i <= num; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};



app.get('/fibonacci/:num', (req, res) => {
    if (fibonacci(req.params.num) == true) {
        res.send(`<h1>This is fibonacci </h1>`);
    } else {
        res.send('<h1>This is not fibonacci <h/1>');
    }
});




//PORT Listener
app.listen(PORT, () => {
  console.log('Server connected at:',PORT);
});