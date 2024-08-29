document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const adminId = document.getElementById('admin-id').value;
    const password = document.getElementById('password').value;

    // Array of valid admin credentials
    const validAdmins = [
        { id: 'admin1', password: 'password1' },
        { id: 'admin2', password: 'password2' },
        { id: 'admin3', password: 'password3' }
    ];

    // Check if the entered credentials match any of the valid admin credentials
    const isValidAdmin = validAdmins.some(admin => admin.id === adminId && admin.password === password);

    if (isValidAdmin) {
        alert('Login successful!');
        // Redirect to the admin dashboard or another page
        window.location.href = '../html/admin.html'; // Ensure this path is correct
    } else {
        alert('Invalid Admin ID or Password.');
    }
});

function forgotPassword() {
    alert('please contact the authorities.');
}
