const amountInput = document.getElementById("amount");
const tipPercentInput = document.getElementById("tip-percent");
const calculateButton = document.getElementById("calculate");
const outputText = document.getElementById("output");
calculateButton.addEventListener("click", () => {
    let amount = parseFloat(amountInput.value);
    let tipPercent = parseFloat(tipPercentInput.value);
    let totalAmount = amount * (1 + tipPercent / 100);
    outputText.innerText = `Total Amount: ${totalAmount.toFixed(2)}`;
});
