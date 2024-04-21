const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");

router.get("/api/records", recordController.getRecords);

module.exports = router;
