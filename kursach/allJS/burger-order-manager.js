function fillCartItems() {
    let cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = ""; 
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let allCardsElement = document.createElement('div');
    allCardsElement.classList.add('allCards');
    if (cart.length == 0){
        cartItemsElement.innerHTML = '<p id = "empty">Корзина пока что пуста</p>';
    } else {
        for (let index = 0; index < cart.length; index++) {
            let cardGoodElement = document.createElement('div');
            cardGoodElement.classList.add('cardGood');
            cardGoodElement.innerHTML = `
                <a href="${cart[index].prod}"><img src="${cart[index].img}" alt="${cart[index].name}"></a>
                <a href="${cart[index].prod}"><p>${cart[index].name}</p></a>
                <p>${cart[index].price},00 ₽ x ${cart[index].amount}</p>
                <div class = "removeAndPrice">
                <p>Вместе: ${cart[index].amount * cart[index].price},00 ₽</p>
                <button class="remove-btn" onclick="removeItem(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                <button class = "remove-btn" onclick="decrementInCart(${index})">-</button>
                <button class = "remove-btn" onclick="incrementInCart(${index})">+</button><br>
                </div>`;
            allCardsElement.appendChild(cardGoodElement);
        }
        cartItemsElement.appendChild(allCardsElement);
        let buttonElement = document.createElement('div');
        buttonElement.innerHTML ='<a href = "/kursach/allHTML/shoppingCart.html"><button class = "shineButton">Оформить</button></a>';
        cartItemsElement.appendChild(buttonElement);
    }
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    fillCartItems();
}

function decrementQuantity(index) {
    let quantityInput = document.getElementById(`quantity${index}`);
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateQuantity(index, quantityInput.value);
    }
}

function incrementQuantity(index) {
    let quantityInput = document.getElementById(`quantity${index}`);
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateQuantity(index, quantityInput.value);
}

function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].amount = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    fillCartItems();
}


function decrementInCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index].amount > 1) {
        cart[index].amount--;
        updateQuantity(index, cart[index].amount);
    }
}

function incrementInCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].amount++;
    updateQuantity(index, cart[index].amount);
}
