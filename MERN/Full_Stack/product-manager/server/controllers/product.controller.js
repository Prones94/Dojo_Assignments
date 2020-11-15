// Trigger code in product.model to be executed and export the model
const Product = require("../models/product.model")

// exports an object containing methods
module.exports = {
    // Long-Form for methods
    create: function(req,res) {
        console.log('Create method used!')
        Product.create(req.body)
            .then((product) => {
                // product is the product from the DB, which has a db _id, createdAt, etc
                res.json(product)

            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    // Short-hand method
    getAll(req,res) {
        console.log("Get all products executed")

        Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },
    getOne(req,res){
        console.log("get one product executed", "url params:", req.params)
        Product.findById(req.params.id)
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete(req,res) {
        console.log("Delete method executed", "url params: ", req.params)
        Product.findByIdAndDelete(req.params.id)
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },

    update(req, res) {
        console.log("UPDATE executed", "url params:", req.params)

        // req.body is the new updated info from the submitted form
        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,// return the updated info than the old
            new:true,
        })
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            res.status(400).json(err)
        })

    }

}