// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package
const fs = require("fs");

// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.text());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

if (!fs.existsSync("database.json"))
{
    console.log("database.json not found. creating...")
    fs.writeFileSync("database.json", "{}")
}

app.post("/renderlist", (req, res) => {
    try {
        let jsonfile = JSON.parse(fs.readFileSync("database.json", "utf8"));

        res.render("108list.hbs", {jsonfile});
    } catch (error) {
        console.error("error loading list: " + error)
        res.status(500).send("error loading list")
    }
});

app.post("/addtolist", (req, res) => {
    try {
        let jsonfile = JSON.parse(fs.readFileSync("database.json", "utf8"));

        jsonfile[req.body] = req.body; // this might look strange but it's an easy way to avoid exact repetitions
        fs.writeFileSync("database.json", JSON.stringify(jsonfile));
    } catch (error) {
        console.error("error adding to list: " + error)
        res.status(500).send("error adding to list")
    }
});

// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));