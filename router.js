const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// Member related routers
router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// Other routers
router.get("/menu", (req, res) => {
    res.send("Menu sahifadasiz");
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifadasiz");
});

module.exports = router;