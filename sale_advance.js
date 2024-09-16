const product = {
  0: ["Mélange original 200g 500 yens", 500],
  1: ["Mélange original 500g 700 yens", 700],
  2: ["Mélange spécial 200g 900 yens", 900],
  3: ["Mélange spécial 500g 1200 yens", 1200],
};
let Montant = 0;
let expedition = 0;
let purchases = {
  blend1: {
    name: "Mélange original 200g 500 yens",
    price: 500,
    quantity: 0,
    total: 0,
  },
  blend2: {
    name: "Mélange original 500g 700 yens",
    price: 700,
    quantity: 0,
    total: 0,
  },
  blend3: {
    name: "Mélange spécial 200g 900 yens",
    price: 900,
    quantity: 0,
    total: 0,
  },
  blend4: {
    name: "Mélange spécial 500g 1200 yens",
    price: 1200,
    quantity: 0,
    total: 0,
  },
}; // Pour contenir les caractéristiques du produit.

let selectedProduct = {}; // Pour contenir les caractéristiques du produit.

function add() {
  // Récupérer les valeurs du produit et de la quantité sélectionnés
  let productSelect = document.getElementById("product");
  let selectedOption = productSelect.options[productSelect.selectedIndex];
  let productName = selectedOption.textContent;
  let productPrice = product[productSelect.selectedIndex][1];
  let quantity = document.getElementById("number").value;

  // Stocker les informations du produit sélectionné dans la variable
  selectedProduct = {
    name: productName,
    price: productPrice,
    quantity: quantity,
  };
  // console.log(productPrice);
  for (const productKey in purchases) {
    const product = purchases[productKey];
    if (product.name == selectedProduct.name) {
      product.quantity += selectedProduct.quantity;
      product.total += selectedProduct.quantity * selectedProduct.price;
    }
  }
  for (const productKey in purchases) {
    const product = purchases[productKey];
    if (product.name == selectedProduct.name) {
      Montant += product.total;
      // console.log(Montant);
    }
  }
  let i = 0;
  for (const productKey in purchases) {
    const product = purchases[productKey];
    if (product.quantity == 0) {
      i++;
    }
  }
  if (i == 4) {
    alert("Aucun ajout");
  } else {
    display(1);
  }
}

function calc() {
  if (Montant < 2000) {
    expedition = 500;
  } else if (Montant >= 2000 && Montant < 3000) {
    expedition = 250;
  } else {
    expedition = 0;
  }
  if (Montant == 0) {
    alert("Aucun produit");
  } else {
    display(0);
  }
}
function display(add) {
  if (add == 0) {
    let i = 0;
    let message = "";
    for (const productKey in purchases) {
      const product = purchases[productKey];
      i += 1;
      if (product.quantity != 0) {
        message += `\n${product.name}: ${product.quantity} items`;
      }
      if (i == 4) {
        message += `\n\n\n\nSous total : ${Montant} yens\nExpedition: ${expedition} yens \nMontant total :${
          Montant + expedition
        } yens `;
        alert(message);
      }
    }
  } else {
    let i = 0;
    let message = "";
    for (const productKey in purchases) {
      const product = purchases[productKey];
      i += 1;
      if (product.quantity != 0) {
        message += `\n${product.name}: ${product.quantity} items`;
        // Utilisez 'product' pour accéder à chaque élément du tableau
      }
      if (i == 4) {
        message += `\n\n\n\nPrix total : ${Montant} yens`;
        alert(message);
      }
    }
  }
}
