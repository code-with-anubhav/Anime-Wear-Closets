const express = require('express');
const router = express.Router()

router.get("/owner", function(req,res) {
    console.log("Hello");
    
    res.send("Hey")
})

module.exports = router