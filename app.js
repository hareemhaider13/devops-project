const express = require("express");
const os = require("os");
const app = express();
let visitorCount = 0;

app.get("/", (req, res) => {
visitorCount++;
res.send(`
<h1>DevOps Project Running Successfully</h1>
<p>Timestamp: ${new Date()}</p>
<p>Visitor Count: ${visitorCount}</p>
<p>Container ID: ${os.hostname()}</p>
`);
});

app.get("/health", (req, res) => {

    res.json({
        status: "healthy"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});