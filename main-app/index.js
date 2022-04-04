const express = require('express');
const app = express();
const PORT = 3000;







//PORT Listener
app.listen(PORT, () => {
  console.log('Server connected at:',PORT);
});