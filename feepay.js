
const feeForm = document.getElementById("feeForm");
const feeMessage = document.getElementById("feeMessage");

feeForm.addEventListener("submit", function (event) {

    const requiredFields = [
        "studentName",
        "admissionNumber",
        "className",
        "rollNumber",
        "amount",
        "utr",
        "paymentDate"
    ];

    for (const fieldName of requiredFields) {
        const field = feeForm.elements.namedItem(fieldName);

        if (!field || !field.value.trim()) {
            event.preventDefault();

            feeMessage.textContent = "Please fill in all required fields.";
            feeMessage.style.color = "red";

            if (field) field.focus();
            return;
        }
    }

    const amount = Number(feeForm.elements.namedItem("amount").value);

    if (!Number.isFinite(amount) || amount <= 0) {
        event.preventDefault();
        feeMessage.textContent = "Please enter a valid fee amount.";
        feeMessage.style.color = "red";
        return;
    }

    feeMessage.textContent =
        "Your fee details are being submitted. Please wait...";

    feeMessage.style.color = "#1d4ed8";
});
