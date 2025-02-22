const express = require("express")
const router = express.Router()
const auth = require("./controllers")


router.post("/register", auth.SignUp)



module.exports = router