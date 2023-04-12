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

      const productCounter = document.createElement('div');
      productCounter.classList.add('product-count');
      //productCounter.classList.add('hide');
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);
      if(existingProductIndex >= 0){
        productCounter.innerHTML = cart[existingProductIndex].quantity;
        productCounter.classList.remove('hide');
      }else{
        productCounter.innerHTML = 0
        productCounter.classList.add('hide');
      }
      productCounter.id = 'product-counter'+ product.id;
      productElement.appendChild(productCounter);

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
          updateProductCounters();
      });
      productElement.appendChild(buttonElement);
      productsContainer.appendChild(productElement);
    });
    });

    loadCart();
    updateProductCounters();

    function loadCart(){
        const cartCount = document.querySelector('#cart-count');
        cartCount.classList.add("hide")
        loadedValue = JSON.parse(localStorage.getItem('status'));
        if(loadedValue === null){
            loadedValue = 0;
        } else {
            if(loadedValue > 0){
                cartCount.classList.remove("hide")
            }else {
                cartCount.classList.add("hide")
            }
            cartCount.textContent = JSON.parse(localStorage.getItem('status'));
        }
    }

    function updateProductCounters(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        for (const iterator of cart) {
            let idTemp = iterator.id;
            const tempPro = document.getElementById('product-counter'+idTemp);
            tempPro.classList.remove('hide')
            tempPro.textContent = iterator.quantity;
        }
    }
/*
    function loadProductCounters(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        for (const iterator of cart) {
            let idTemp = iterator.id;
            const tempProductCounter = document.getElementById('product-counter'+idTemp);
            tempProductCounter.textContent = iterator.quantity;
        }
    }*/
    

    function updateCartCount() {
        const cartCount = document.querySelector('#cart-count');
        let valueFromLS = JSON.parse(localStorage.getItem('status'));
        cartCount.classList.remove("hide")
        cartCount.textContent = valueFromLS+1;
        localStorage.setItem('status', JSON.stringify(valueFromLS+1));
    }