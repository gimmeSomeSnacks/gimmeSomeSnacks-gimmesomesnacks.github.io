function fillCartItems() {
    let cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = ""; 
    
    let summ = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length == 0){
        window.location.href = '/kursach/allHTML/main.html';
    }
    for (let index = 0; index < cart.length; index++) {
        let cartItemElement = document.createElement('div');
        cartItemElement.classList.add('oneGood');
        cartItemElement.innerHTML = `
            <div class="card">
            <a href="${cart[index].prod}"><img src="${cart[index].img}" alt="${cart[index].name}"></a>
            <a href = "${cart[index].prod}">${cart[index].name}</a>
            </div>
            <p>${cart[index].amount}</p>
            <p>${cart[index].price} ₽</p>
            <div class = "removeAndPrice">
            <p>${cart[index].amount * cart[index].price} ₽</p>
            <button class="remove-btn" onclick="removeItem(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>`;
        summ += cart[index].amount * cart[index].price;
        cartItemsElement.appendChild(cartItemElement);
    }
    let quantitySumm = document.getElementById(`text2`);
    quantitySumm.value = parseInt(quantitySumm.value | 0) + summ;
    quantitySumm.innerText = quantitySumm.value + " ₽";
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    fillCartItems();
}

function removeAll(){
    alert("Заказ успешно оформлен, ожидайте письма на почту или звонка на телефон!");
    localStorage.removeItem('cart');
    window.location.href = '/kursach/allHTML/main.html';
}

window.onload = function () {
    fillCartItems();
};