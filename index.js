const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/isConnected", (req, res) => {
    res.sendFile(path.join(__dirname, "connected.html"));
})

app.get("/connected", (req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname, "connected.html"));
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
