const amountInput = document.getElementById("amount"); //amount input
const tipPercentInput = document.getElementById("tip-percent"); //tip percent input
const calculateButton = document.getElementById("calculate"); //calculate button
const outputText = document.getElementById("output"); //output text area
calculateButton.addEventListener("click", () => {
    //when calculate button is pressed
    let amount = parseFloat(amountInput.value); //get amount value
    let tipPercent = parseFloat(tipPercentInput.value); //get tip percent value
    let totalAmount = amount * (1 + tipPercent / 100); //get total billing amount
    let tipAmount = amount * (tipPercent / 100); //get tip amount
    outputText.innerText = `
        Total Amount: $${totalAmount.toFixed(2)}
        Tip Amount: $${tipAmount.toFixed(2)}
        Tip Percent: ${tipPercent}%
        Bill Amount: $${amount.toFixed(2)}
    `; //set output text area to format total billing amount, tip amount, tip percent and bill amount
});
