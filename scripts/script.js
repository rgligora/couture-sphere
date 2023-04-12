fetch('./scripts/data.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('import-products');

    data.products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.dataset.category = product.category;

      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement('h3');
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);

      const priceElement = document.createElement('span');
      priceElement.textContent = '$' + product.price.toFixed(2);
      productElement.appendChild(priceElement);

      const buttonElement = document.createElement('button');
      buttonElement.classList.add('add-to-cart-button');
      buttonElement.alt = product.name;
      buttonElement.innerHTML = '<img class="hidden-icon" src="./images/icons8-shopping-cart-96.png" alt="shopping-cart-button">';
      productElement.appendChild(buttonElement);

      productsContainer.appendChild(productElement);
    });
});



