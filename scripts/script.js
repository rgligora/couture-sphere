fetch('./scripts/data.json')
  .then(response => response.json())
  .then(data => {

    let cartItems = [];
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
      
      const addToCartBtn = buttonElement
      addToCartBtn.addEventListener('click', function() {
        const productInCart = {
            id: product.id,
            name: product.name,
            price: product.price.toFixed(2),
            quantity: 1,
          };
      
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          const existingProductIndex = cart.findIndex((p) => p.id === productInCart.id);
          if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity++;
          } else {
            cart.push(productInCart);
          }
      
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
      });
      productElement.appendChild(buttonElement);
      productsContainer.appendChild(productElement);
    });
    });

    loadCart();

    function loadCart(){
        const cartCount = document.querySelector('#cart-count');
        cartCount.classList.add("hide")
        loadedValue = JSON.parse(localStorage.getItem('status'));
        if(loadedValue == null){
            loadedValue = 0;
        } else {
            if(loadedValue != 0){
                cartCount.classList.remove("hide")
            }
            cartCount.textContent = JSON.parse(localStorage.getItem('status'));
        }
    }
    

    function updateCartCount() {
        const cartCount = document.querySelector('#cart-count');
        let valueFromLS = JSON.parse(localStorage.getItem('status'));
        cartCount.classList.remove("hide")
        cartCount.textContent = valueFromLS+1;
        localStorage.setItem('status', JSON.stringify(valueFromLS+1));
    }