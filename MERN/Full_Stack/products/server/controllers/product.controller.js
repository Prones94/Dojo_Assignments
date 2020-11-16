const ProductManager = require("../models/product.model");

module.exports = {
    create: function(req,res) {
        console.log("Create method executed")

        ProductManager
            .create(req.body)
            .then(post => {
                res.json(product)
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },
    getAll(req, res) {
        console.log("Geting all products");
        ProductManager.find()
            .then(products => {
                res.json(products);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    getOne(req, res){
        console.log(`Get one product, url params: ${req.params}`);
        ProductManager.findById(req.params.id)
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete(req,res){
        console.log(`Delete method executed, url params: ${req.params}`);
        ProductManager.findByIdAndDelete(req.params.id)
            .then(post => {
                res.json(post);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },
    update(req,res) {
        console.log(`Update method executed, url params: ${req.params}`);
        ProductManager.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
            .then(post => {
                res.json(post)
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }
}