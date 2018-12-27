let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/contacts.controller")

router.get("/contacts", list);

router.get("/contacts/:contactId",show);

router.post("/contacts", create);


module.exports = router;
