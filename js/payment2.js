document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subtotal = parseFloat(urlParams.get('subtotal'));

    if (!isNaN(subtotal)) {
        const tax = 3.50;
        const total = subtotal + tax;

        document.getElementById('item-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    } else {
        console.error('Subtotal not found or invalid');
    }
});

function handlePlaceOrder(event) {
    event.preventDefault();
    
    // Add logic to handle order placement here
    // For example, validate the form or process the selected books
    
    // Show alert
    alert('Order placed successfully!');
    
    // Redirect to home.html
    window.location.href = '../html/home.html';
}

// Attach the handlePlaceOrder function to the form submit event
document.getElementById('checkoutForm').addEventListener('submit', handlePlaceOrder);
