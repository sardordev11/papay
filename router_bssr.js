const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");
const productController = require("./controllers/productController");
const upload_product = require("./utils/upload-multer") ("products");

/**********************************
 *         BSSR EJS               *
 **********************************/

router_bssr
.get("/signup", restaurantController.getSignupMyRestaurant)
.post("/signup", restaurantController.signupProcess);
router_bssr
.get("/login", restaurantController.getLoginMyRestaurant)
.post("/login", restaurantController.loginProcess);
router_bssr.get("/logout", restaurantController.logoutProcess);
router_bssr.get("/check-me", restaurantController.checkSessions);

router_bssr.get("/products/menu", restaurantController.getMyRestaurantdata);  
router_bssr.post(
    "/products/create", 
    restaurantController.validateAuthRestaurant, 
    upload_product.array("product_images", 5),
    productController.addNewProduct
    );
router_bssr.post("/products/edit/:id", 
restaurantController.validateAuthRestaurant,
productController.updateChosenProduct
);

module.exports = router_bssr;