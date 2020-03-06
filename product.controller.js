const Produit = require("../models/produits.models.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    exports.create = (req, res) => {
        // Validate request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
      
        // Create a produit
        const produit = new Produit({
          names: req.body.names,
          Braind: req.body.Braind,
          price: req.body.price,
          //Quantity: req.body.Quantity
        });
      
        // Save Product in the database
        Produit.create(produit, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the product."
            });
          else res.send(data);
        });
      };
      
};

// Ret// Retrieve all Customers from the database.
// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Produit.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};


// Find a single product with a productId
exports.findOne = (req, res) => {
  
  Prodduit.findById(req.params.Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.Id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving product with id " + req.params.Id
        });
      }
    } else res.send(data);
  });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
};
Produit.updateById(
  req.params.Id,
  new Customer(req.body),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.Id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Product with id " + req.params.Id
        });
      }
    } else res.send(data);
  }
);
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};
