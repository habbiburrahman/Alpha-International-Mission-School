
const feeForm = document.getElementById("feeForm");
const feeMessage = document.getElementById("feeMessage");

feeForm.addEventListener("submit", function () {
    feeMessage.textContent = "Your fee details are being submitted. Please wait...";
    feeMessage.style.color = "#1d4ed8";
});

