const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}

  })
      .then(response => {
          return response.json();

      })
};

const getProduct = () => {
  sendHttpRequest('Get', 'http://localhost:8888/produit').then((data) => {
      let result = `
      <h2 class="text-center"> Liste des produits</h2>
      <div class="container">
  <div class="row ">
      <table class="table table-striped table-sm">
              <thead class="thead bg-primary text-white">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Prix</th>
                  <th scope="col">categorie</th>
                </tr>
              </thead> <tbody>`;

      data.forEach((produit) => {
          const { Id, names, Braind, price, Quantity, iDcategorie } = produit
          result +=
              
                  `<tr>
                  <th>${Id}</th>
                  <th>${names}</th>
                  <th>${Braind}</th>
                  <th> ${price}</th>
                  <th> ${Quantity}</th>
                  <th> <a href="#" class="btn btn-primary">+</a></th>
                  
                  </tr>`
              
          document.getElementById('result').innerHTML = result;
      });
      document.getElementById('result').innerHTML += `</tbody> </table> </div> </div>
      <a href="#" class="btn btn-primary">Panier</a>
      <a href="#" class="btn btn-primary">Commande</a>`;
  })
}

getProduct();