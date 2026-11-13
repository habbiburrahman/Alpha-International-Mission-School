
const feeForm = document.getElementById("feeForm");

if (feeForm) {
    feeForm.addEventListener("submit", function () {
        const button = feeForm.querySelector("button[type='submit']");

        button.textContent = "Submitting...";
        button.disabled = true;
    });
}
