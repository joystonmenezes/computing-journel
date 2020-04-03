/**
 * index.js
 *
 * Implements the service logic for delivering static webapge content
 *
 * Author: Trent Prynn
 */

const express = require("express");
const port = process.env.PORT;
const app = express();

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Listening on port ' + port);
});
