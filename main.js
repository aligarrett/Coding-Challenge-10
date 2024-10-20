// Task 2: Add Event Listeners for Product Selection

// Get references to the elements
const sizeDropdown = document.getElementById('size');
const priceDisplay = document.getElementById('price');

// Add event listener to the dropdown
sizeDropdown.addEventListener('change', function() {
    // Get the selected option
    const selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    
    // Get the price from the selected option's data attribute
    const newPrice = selectedOption.getAttribute('data-price');
    
    // Update the price display
    priceDisplay.textContent = `Price: $${newPrice}`;
});