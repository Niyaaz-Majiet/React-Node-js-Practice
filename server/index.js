const express = require("express");
const cors = require('cors');
const path = require("path");
const app = express();
const mockSettings = require('./public/mock_data.json');

app.use(express.static("../client/build"));
app.use(cors({
  origin: '*'
}));

app.get("/site", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.get("/mock-site-settings",(req,res)=>{
  res.send(mockSettings);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
  console.log("ON");
});
