const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const routes = require('.');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

//Connect to mysql DB
sequelize.connect(process.env.MYSQL_URI || ("mysqldb://localhost/reactanimalslist");

app.listen(PORT, 8000 () {
  console.log(`🌎  ==> Server is listening on PORT 8000 ${PORT 8000}!`);
});
