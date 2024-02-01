const PORT = process.env.PORT || 8001;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const bodyparser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client/build")));


app.post('/api/deneme-submission', (req, res) => {
  const incomingMessage = req.body.message;
  if (incomingMessage) {
    res.json({
      status: "ok",
      message: `Message received: Here is your the message: ${incomingMessage}`
    })
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// asda sd

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});