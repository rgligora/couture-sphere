

const cartList = document.querySelector('#cart-container');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

cartItems.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('cart-product');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('cart-product-name');
    nameDiv.innerHTML = item.name;
    listItem.appendChild(nameDiv);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('cart-product-menu');
    const buttonMinus =  document.createElement('button');
    buttonMinus.classList.add('button');
    buttonMinus.classList.add('decrement');
    buttonMinus.classList.add('circle');
    buttonMinus.innerHTML = '-';
    const tempMinus = buttonMinus;
        tempMinus.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex((p) => p.id === item.id);
            cart[existingProductIndex].quantity--;
            let statusTemp = JSON.parse(localStorage.getItem('status'));
            statusTemp--;
            if(cart[existingProductIndex].quantity == 0){
                localStorage.clear();
                cart.splice(existingProductIndex,1);
            }
            localStorage.setItem('status', JSON.stringify(statusTemp));
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            loadCartCount();
        });
    menuDiv.appendChild(buttonMinus);
    const dividerElem = document.createElement('div');
    dividerElem.classList.add('divider')
    menuDiv.appendChild(dividerElem)
    const inputElem = document.createElement('input');
    inputElem.value = item.quantity;
    inputElem.classList.add('input-bar')
    menuDiv.appendChild(inputElem);
    const dividerElem2 = document.createElement('div');
    dividerElem2.classList.add('divider')
    menuDiv.appendChild(dividerElem2)
    const buttonPlus =  document.createElement('button');
    buttonPlus.classList.add('button');
    buttonPlus.classList.add('increment');
    buttonPlus.classList.add('circle');
    buttonPlus.innerHTML = '+';
    const tempPlus = buttonPlus;
        tempPlus.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex((p) => p.id === item.id);
            cart[existingProductIndex].quantity++;
            let statusTemp = JSON.parse(localStorage.getItem('status'));
            statusTemp++;
            localStorage.setItem('status', JSON.stringify(statusTemp));
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            loadCartCount();
        });
    menuDiv.appendChild(buttonPlus);

    listItem.appendChild(menuDiv);

    cartList.appendChild(listItem);
});


const clearAllButton = document.querySelector('.clear-all');
clearAllButton.addEventListener('click', function() {
    updateClearedCartCount();
    localStorage.clear();
    updateCart();
})


loadCartCount();


function updateCart(){

    const cartList = document.querySelector('#cart-container');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = '';

    const cartHeader = document.createElement('div');
    cartHeader.classList.add('cart-header')
    const el1 = document.createElement('div');
    el1.innerText = 'PRODUCT';
    cartHeader.appendChild(el1);
    const el2 = document.createElement('div');
    el2.innerText = 'QUANTITY';
    cartHeader.appendChild(el2);
    cartList.appendChild(cartHeader);



    cartItems.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.classList.add('cart-product');

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('cart-product-name');
        nameDiv.innerHTML = item.name;
        listItem.appendChild(nameDiv);

        const menuDiv = document.createElement('div');
    menuDiv.classList.add('cart-product-menu');
    const buttonMinus =  document.createElement('button');
    buttonMinus.classList.add('button');
    buttonMinus.classList.add('decrement');
    buttonMinus.classList.add('circle');
    buttonMinus.innerHTML = '-';
    const tempMinus = buttonMinus;
        tempMinus.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex((p) => p.id === item.id);
            cart[existingProductIndex].quantity--;
            let statusTemp = JSON.parse(localStorage.getItem('status'));
            statusTemp--;
            if(cart[existingProductIndex].quantity == 0){
                localStorage.clear();
                cart.splice(existingProductIndex,1);
            }
            localStorage.setItem('status', JSON.stringify(statusTemp));
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            loadCartCount();
        });
    menuDiv.appendChild(buttonMinus);
    const dividerElem = document.createElement('div');
    dividerElem.classList.add('divider')
    menuDiv.appendChild(dividerElem)
    const inputElem = document.createElement('input');
    inputElem.value = item.quantity;
    inputElem.classList.add('input-bar')
    menuDiv.appendChild(inputElem);
    const dividerElem2 = document.createElement('div');
    dividerElem2.classList.add('divider')
    menuDiv.appendChild(dividerElem2)
    const buttonPlus =  document.createElement('button');
    buttonPlus.classList.add('button');
    buttonPlus.classList.add('increment');
    buttonPlus.classList.add('circle');
    buttonPlus.innerHTML = '+';
    const tempPlus = buttonPlus;
        tempPlus.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex((p) => p.id === item.id);
            cart[existingProductIndex].quantity++;
            let statusTemp = JSON.parse(localStorage.getItem('status'));
            statusTemp++;
            localStorage.setItem('status', JSON.stringify(statusTemp));
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            loadCartCount();
        });
    menuDiv.appendChild(buttonPlus);

    listItem.appendChild(menuDiv);

    cartList.appendChild(listItem);
});
}

function updateClearedCartCount() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = 0;
    cartCount.classList.add('hide')
    localStorage.setItem('status', 0);
}

function loadCartCount(){
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
        cartCount.textContent = loadedValue;
    }
    
    
}