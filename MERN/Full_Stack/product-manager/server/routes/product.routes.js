const productController = require('../controllers/product.controller')

// ****** Leading slashes in URLS REQUIRED ********************

//exports a function to be called and passing the app
module.exports = app => {
    // Get Route
    app.get("/api/products", productController.getAll);
    app.get("/api/products/:id", productController.getOne);
    // Post Route
    app.post("/api/products/create", productController.create);
    // Delete Route
    app.delete("/api/products/:id", productController.delete);
    // Update Route
    app.put("/api/products/:id", productController.update);

}