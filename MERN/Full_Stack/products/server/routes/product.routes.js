const productManagerController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", productManagerController.getAll);
    app.get("/api/products/:id", productManagerController.getOne);
    app.post("/api/products/create", productManagerController.create);
    app.delete("/api/products/:id", productManagerController.delete);
    app.put("/api/products/:id", productManagerController.update);
}