// Task 2: Add Event Listener for Product Selection

// Get references to the size dropdown, price display, and purchase button
const sizeSelector = document.getElementById('size');
const priceDisplay = document.getElementById('price');
const purchaseButton = document.getElementById('purchase');

// Function to update price based on selected size
sizeSelector.onchange = function() {
  const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
  const selectedSize = selectedOption.value;

  // Update price based on the size selected
  if (selectedSize === 'small') {
    priceDisplay.textContent = '$20';
  } else if (selectedSize === 'medium') {
    priceDisplay.textContent = '$25';
  } else if (selectedSize === 'large') {
    priceDisplay.textContent = '$30';
  }
};

// Task 3: Handle Stock Availability

// Update price and handle stock availability when size is selected
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