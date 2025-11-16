const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/errorMiddleware")
const {getTareas, createTareas, updateTareas, deleteTareas} = require("../controllers/tareasControlers")


router.get("/", getTareas)
router.post("/", createTareas)

router.put("/:id", protect, updateTareas)
router.delete("/:id", protect, deleteTareas)

module.exports = router

