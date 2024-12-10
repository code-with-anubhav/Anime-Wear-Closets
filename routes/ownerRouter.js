const express = require('express');
const router = express.Router()

router.get("/owner", function(req,res) {
    res.send("Hey")
})

module.exports = router