const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const routes = require('.');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

//Connect to mysql DB - Susan is this code below right?
sequelize.connect(
  process.env.MYSQL_URI || 'mysqldb://localhost/worldofanimals_db'
);

app.listen(PORT, function() {
  console.log(`🌎  ==> Server is listening on PORT {PORT}!`);
});
