const express = require("express")
const router = express.Router()
const auth = require("./controllers")
const { verifyToken } = require("./../middlewares")


router.post("/register", auth.SignUp)
router.post("/login", auth.Login)
router.get("/profile", verifyToken, auth.getProfile)



module.exports = router