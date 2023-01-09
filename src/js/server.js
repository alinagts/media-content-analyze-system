const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/source', require('./routes'));

app.listen(PORT, () => console.log(`server started running at port ${PORT}`));