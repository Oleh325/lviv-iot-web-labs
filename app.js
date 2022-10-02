const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(`Error: ${err}`))

const app = express();

// Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Cat routes
app.use('/cats', require('./routes/cats'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, console.log(`Server started on port ${PORT}`));