function addToCart(productSrc) {
    let productImg = document.getElementById("imgOne");
    let imgSrc = productImg.getAttribute("src");
    let imgSrcString = String(imgSrc);
    let productName = document.getElementById("first").innerText;
    let productPrice = document.getElementById("product-price").innerText;
    productPrice = parseInt(productPrice.replaceAll(' ', '').slice(0, -4));

    let inputStepper = document.getElementById("quantity");
    let productAmount = parseInt(inputStepper.value);
    let item = {
        prod: productSrc,
        img: imgSrcString,
        name: productName,
        price: productPrice,
        amount: productAmount,
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.amount += item.amount;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function decrementQuantity() {
    let quantityInput = document.getElementById("quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function incrementQuantity() {
    let quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}