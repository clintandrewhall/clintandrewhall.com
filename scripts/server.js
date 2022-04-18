const express = require('express');
const { addAllRoutes } = require('./routes');
const app = express();
addAllRoutes(app);
app.listen(5001);
