const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 1337;
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log('The magic happen on port :' + port);
});