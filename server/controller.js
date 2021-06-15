const houses = require("./db.json");
let globalId = 4;

module.exports = {
    getAllHouses: function(req, res){
        console.log(houses);
        res.status(200).send(houses);
    },
    createHouse: function(req, res){
        
        //push an obj to the db.json and send the updated houses
        const { address, price, imageURL } = req.body; //linked up
        let priceNum = parseInt(price); //convert price to a numeric value
        let houseObj = {
            id: globalId,
            address,
            price: priceNum,
            imageURL
        }
        houses.push(houseObj)
        res.status(200).send(houses);
        globalId++;
        console.log(houses);
    },
    deleteHouse: function(req, res){
        console.log("house: "+req.params.houseID);
        let theIndex = houses.findIndex(function(houseObj){
            return houseObj.id === +req.params.houseID;
        })
        houses.splice(theIndex, 1);
        console.log(theIndex);
        res.status(200).send(houses);
    },
    updateHouse: function(req, res){
        console.log(req.params.houseID); //house id
        console.log(req.body.type); //plus or minus
        let theIndex = houses.findIndex(function(houseObj){ //return the index of where the return statement is true 
            return houseObj.id === +req.params.houseID;
        })
        if(req.body.type === "plus")
        {
            houses[theIndex].price += 10000;
        }
        if(req.body.type === "minus")
        {
            houses[theIndex].price -= 10000;
        }
        res.status(200).send(houses);
        //if plus then set the money in the object at an ID += an amount
    }
}
