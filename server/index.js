const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
  //res.send('Hello, this is the root path of your application!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});