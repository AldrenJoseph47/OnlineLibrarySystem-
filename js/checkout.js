document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("checkoutForm");
    const subtotalElement = document.getElementById("subtotal");
    const proceedButton = document.querySelector(".summary button");

    form.addEventListener("change", function () {
        let subtotal = 0;
        const checkboxes = form.querySelectorAll("input[type=checkbox]:checked");
        checkboxes.forEach(function (checkbox) {
            subtotal += parseInt(checkbox.value);
        });
        subtotalElement.textContent = subtotal;
    });

    proceedButton.addEventListener("click", function (event) {
        event.preventDefault();
        const subtotal = subtotalElement.textContent;
        window.location.href = `payment2.html?subtotal=${subtotal}`;
    });
});
