const express = require("express");
const app = express();
const port = 5001;

// run express on static public files - index.html
app.use("/static", express.static("public"));

// listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})