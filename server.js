const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("app/public"));


app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);

apiRoutes(app);


app.listen(PORT, function(err) {
	if (err) {
		console.log(err)
	} else{
	console.log(`Connected. Listening on PORT ${PORT}`);
	}
})