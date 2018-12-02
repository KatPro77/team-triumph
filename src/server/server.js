const express = require('express');
// const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

// ? NOT SURE IF NEEDED HERE Connect to mysql DB
//mysql.connect(process.env.mysql_URI || 'mysqldb://localhost/reactanimalslist');

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> Lislistening on PORT ${PORT}!`);
});
