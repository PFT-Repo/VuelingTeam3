const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json());
app.use(require('./routes/index'));
puerto = process.env.PORT || 3000;
app.listen(puerto);
console.log('server on port 3000');