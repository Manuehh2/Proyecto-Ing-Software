const express = require("express")
const router = express.Router()

const {login, register, data} = require("../controllers/usersControlers")
const {protect} = require("../middleware/authMiddleware")

//endpoint publico
router.post("/login", login)
router.post("/register", register)


//endpoint privado
router.get("/data", data)

module.exports = router

