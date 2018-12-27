let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/comments.controller")

router.get("/comments",list);

 router.get("/comments/:commentId", show);

 router.post("/comments", create );

 module.exports = router;