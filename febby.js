// Function to add a product
function addProduct() {
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    const productList = document.getElementById('product-list');
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <p>$${price}</p>
        <button onclick="deleteProduct(this)">Delete</button>
    `;
    productList.appendChild(productDiv);
}

// Function to delete a product
function deleteProduct(button) {
    button.parentElement.remove();
}

// Function to add a user
function addUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('user-email').value;

    const userList = document.getElementById('user-list');
    const userDiv = document.createElement('div');
    userDiv.className = 'user-item';
    userDiv.innerHTML = `
        <h3>${username}</h3>
        <p>${email}</p>
        <button onclick="deleteUser(this)">Delete</button>
    `;
    userList.appendChild(userDiv);
}

// Function to delete a user
function deleteUser(button) {
    button.parentElement.remove();
}

// Function to add an order
function addOrder() {
    const orderId = document.getElementById('order-id').value;
    const customer = document.getElementById('order-customer').value;
    const products = document.getElementById('order-products').value;
    const status = document.getElementById('order-status').value;

    const orderList = document.getElementById('order-list');
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-item';
    orderDiv.innerHTML = `
        <h3>Order ID: ${orderId}</h3>
        <p>Customer: ${customer}</p>
        <p>Products: ${products}</p>
        <p>Status: ${status}</p>
        <button onclick="deleteOrder(this)">Delete</button>
    `;
    orderList.appendChild(orderDiv);
}

// Function to delete an order
function deleteOrder(button) {
    button.parentElement.remove();
}
