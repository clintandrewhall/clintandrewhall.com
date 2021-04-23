const express = require('express');
const { addApiRoutes } = require('./routes');
const app = express();
addApiRoutes(app);
app.listen(5000);
