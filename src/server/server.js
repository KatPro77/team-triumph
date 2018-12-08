const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

//Connect to mysql DB
Sequelize.connect(
  process.env.MYSQL_URI || 'mysqldb://localhost/reactanimalslist'
);

app.listen(PORT, function() {
  console.log(`🌎  ==> Server is listening on PORT {PORT}!`);
});
