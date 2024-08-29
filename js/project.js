document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.querySelector('.checkout-button');
    
    checkoutButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission by default
        
        // Get all required input fields
        const requiredFields = document.querySelectorAll('input[required]');
        let allFieldsFilled = true;
        
        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                allFieldsFilled = false;
                field.style.border = '2px solid red'; // Highlight the empty field
            } else {
                field.style.border = ''; // Reset border if filled
            }
        });
        
        if (allFieldsFilled) {
            // Simulate payment processing
            processPayment();
        } else {
            // Show alert and stay on the same page
            alert("Please fill in all required fields.");
        }
    });
});

function processPayment() {
    // Simulate payment processing with a random boolean for success/failure
    const paymentSuccessful = Math.random() > 0.5; // 50% chance of success or failure

    if (paymentSuccessful) {
        // Redirect to home.html if payment is successful
        window.location.href = '../html/home.html';
    } else {
        // Redirect to plan.html if payment is unsuccessful
        alert("Payment unsuccessful. Please try again.");
        window.location.href = '../html/plan.html';
    }
}

function showBenefits(plan) {
    document.querySelectorAll('.benefits').forEach(el => el.style.display = 'none');
    document.getElementById(`${plan}-benefits`).style.display = 'block';
}

function goToPayment() {
    const selectedPlan = document.querySelector('input[name="plan"]:checked');
    if (selectedPlan) {
        const planValue = selectedPlan.value;
        // Redirect to the payment page with the selected plan as a URL parameter
        window.location.href = `../html/payment.html?plan=${planValue}`;
    } else {
        alert('Please select a subscription plan.');
    }
}

function handlePlaceOrder(event) {
    event.preventDefault();
    alert("Please do not refresh the page while payment is processing.");
    // Simulate form submission logic
    processPayment();
}

function calculateSubtotal(plan) {
    let subtotal;
    switch (plan) {
        case '6months':
            subtotal = 499.00;
            break;
        case '1year':
            subtotal = 699.00;
            break;
        case '2years':
            subtotal = 1499.00;
            break;
        default:
            subtotal = 0.00;
    }
    return subtotal;
}

function updateOrderSummary() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');
    const itemSubtotal = calculateSubtotal(selectedPlan);
    const tax = 3.50;
    const total = itemSubtotal + tax;

    document.getElementById('item-subtotal').textContent = `₹${itemSubtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

// Run the updateOrderSummary function when the page loads
window.onload = updateOrderSummary;
