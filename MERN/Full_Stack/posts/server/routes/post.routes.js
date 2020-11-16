const postController = require("../controllers/post.controller");

module.exports = app => {
    app.get("/api/posts", postController.getAll)
    app.get("/api/posts/:id", postController.getOne)
    app.post("/api/posts/create", postController.create)
    app.delete("/api/posts/:id", postController.delete)
    app.put("/api/posts/:id", postController.update)
}