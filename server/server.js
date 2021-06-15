const express = require("express");
const app = express();
const cors = require("cors");
// const movies = require("./db.json");
const ctrl = require("./controller"); //goes to module.exports

const { getAllHouses, createHouse, deleteHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());
const port = 4004;
app.listen(port, function(){console.log("port running on " + port);})

app.get("/api/houses", getAllHouses)
app.post("/api/houses", createHouse)
app.delete("/api/houses/:houseID", deleteHouse)
app.put("/api/houses/:houseID", updateHouse)

