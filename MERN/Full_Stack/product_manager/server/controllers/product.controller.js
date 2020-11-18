const Products = require("../models/product.model");

// export an object with a bunch of methods in it
module.exports = {
  // key: value pair pattern, long-form for methods
  create: function (req, res) {
    console.log("create method executed");

    Products.create(req.body)
      .then((product) => {
        // product is the product from the DB now, which has a DB _id, createdAt, etc.
        // send it back in the response to the client
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // shorthand method key value pair
  getAll(req, res) {
    console.log("getAll method executed");

    // .find always returns an array
    Products.find()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    Products.findById(req.params.id)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Products.findByIdAndDelete(req.params.id)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    // req.body is the new updated info from the submitted form
    Products.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};