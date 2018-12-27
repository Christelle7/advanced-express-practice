let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/vehicles.controller")

router.get("/vehicles",list);

 router.get("/vehicles/:vehicleId",show);

 router.post("/vehicles", create)

 module.exports = router;