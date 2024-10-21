// Task 2: Add Event Listener for Product Selection

// Get references to the size dropdown, price display, and purchase button
const sizeSelector = document.getElementById('size');
const priceDisplay = document.getElementById('price');
const purchaseButton = document.getElementById('purchase');

// Function to update price and handle stock availability when size is selected
sizeSelector.onchange = function() {
  const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
  const selectedSize = selectedOption.value;
  const isInStock = selectedOption.getAttribute('data-stock') === 'true';

  // Update price based on size
  if (selectedSize === 'small') {
    priceDisplay.textContent = '$20';
  } else if (selectedSize === 'medium') {
    priceDisplay.textContent = '$25';
  } else if (selectedSize === 'large') {
    priceDisplay.textContent = '$30';
  }

  // Disable purchase button if out of stock
  purchaseButton.disabled = !isInStock;
};

// Task 4: Create Checkout Event

// Add event listener to the purchase button
purchaseButton.onclick = function() {
  // Check if the purchase button is disabled (out of stock)
  if (!purchaseButton.disabled) {
    // If the product is in stock, show a confirmation message
    alert('Thank you for purchasing the Hello Kitty Plush!');
  } else {
    // If the product is out of stock, show an error message
    alert('Sorry, this size is out of stock and cannot be purchased.');
  }
};

// Task 5: Implement Event Delegation for Dynamic Product List
const addProductForm = document.getElementById('addProductForm');
const productList = document.getElementById('productList');

addProductForm.onsubmit = function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const productName = document.getElementById('newProductName').value;
  const productPrice = document.getElementById('newProductPrice').value;
  const productStock = document.getElementById('newProductStock').value === 'true';

  // Create a new product element
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <h3>${productName}</h3>
    <p class="dynamic-price">$${productPrice}</p>
    <button class="dynamic-purchase" ${!productStock ? 'disabled' : ''}>Buy Now</button>
  `;

  // Add the new product to the product list
  productList.appendChild(productDiv);

  // Clear the form inputs
  addProductForm.reset();
};

// Event Delegation to handle click events for dynamically added products
productList.onclick = function(event) {
  if (event.target.classList.contains('dynamic-purchase')) {
    if (!event.target.disabled) {
      alert('Thank you for purchasing the product!');
    } else {
      alert('Sorry, this product is out of stock.');
    }
  }
};