const productController = require("../controllers/product.controller")
const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", ProductController.getAll)
    app.get("/api/products/:id", ProductController.getOne)
    app.post("/api/products", productController.create)
    app.delete("/api/products/:id", ProductController.delete)
    app.put("/api/products/:id", ProductController.update)
}