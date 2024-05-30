const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  const html = marked.parse(markdown);
  res.json({ html });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});