module.exports = app => {
    const produit = require("../controllers/product.controller.js");
  
    // Create a new product
    app.post("/produit", produit.create);
  
    // Retrieve all product
    app.get("/produit", produit.findAll);
  
    // Retrieve a single product with productId
    app.get("/produit/:Id", produit.findOne);
  
    // Update a product with productId
    app.put("/produit/:Id", produit.update);
  
    // Delete a C with customerId
    app.delete("/produit/:Id", produit.delete);
  
    // Create a new Customer
    app.delete("/produit", produit.deleteAll);
  };