const sql = require("./db.js");

// constructor
const Produit = function(produit) {
  this.id = produit.id;
  this.names = produit.names;
  this.Braind = produit.Braind;
  this.prix = produit.prix;
  this.Quantity = produit.Quantity;
  };
/*exports.create = (req, res) => {
  produit = new produit({
    marque: req.body.email,
    couleur: req.body.name,
    active: req.body.active
  });*/
  // Validate request
  /*if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }}*/

 // Create a Product
/* produit.create(produit, (err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Product."
    });
  else res.send(data);
});*/



/*produit.create = (newProduit, result) => {
  sql.query("INSERT INTO T_produit SET ?", newProduit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newProduit });
    result(null, { id: res.insertId, ...newCustomer });
  });
};*/

Produit.create = (newProduit, result) => {
  console.log("***++++++++++++++++++" + newProduit)
  sql.query("INSERT INTO T_Products SET names = ?,  Braind = ?", [newProduit.names, newProduit.Braind], (err, res)=> {
         console.log("created product: ", { id: res.insertId, ...newProduit });
         result(null, { id: res.insertId, ...newProduit});
  })
  if(err) {
      console.log("error: ", err);
      result(err, null);
   }
}


Produit.findById = (produitId, result) => {
  sql.query(`SELECT * FROM T_produit WHERE id = ${produitId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Produit.getAll = result => {
  sql.query("SELECT * FROM T_produit", (err, res) => {
    console.log(res)
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Produit.updateById = (id, produit, result) => {
  sql.query(
    "UPDATE T_produit SET names = ?, Braind = ?, price = ? WHERE id = ?",
    [produit.names, produit.Braind, produit.price, produit.Quantity, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...produit });
      result(null, { id: id, ...produit });
    }
  );
};

Produit.remove = (id, result) => {
  sql.query("DELETE FROM T_produit WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted produit with id: ", id);
    result(null, res);
  });
};

Produit.removeAll = result => {
  sql.query("DELETE FROM T_produit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} T_produit`);
    result(null, res);
  });
};

module.exports = Produit;
