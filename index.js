
var balance = 10000; 
var transactionType = ''; 
var inputAmount = '';


function showBalance() {
    document.getElementById("screenText").textContent = `Balance: $${balance}`;
}


function enterAmount(type) {
    transactionType = type;
    document.getElementById("screenText").textContent = `Enter amount to ${type}`;
    clearAmount();
}


function enterDigit(digit) {
    inputAmount += digit;
    document.getElementById("amountInput").value = inputAmount;
}


function clearAmount() {
    inputAmount = '';
    document.getElementById("amountInput").value = '';
}


function confirmTransaction() {
    var amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("screenText").textContent = "Invalid amount.";
        return;
    }

    if (transactionType === 'withdraw') {
        if (amount > balance) {
            document.getElementById("screenText").textContent = "Insufficient funds.";
        } else {
            balance -= amount;
            document.getElementById("screenText").textContent = `Withdrew $${amount}. New balance: $${balance}`;
        }
    } else if (transactionType === 'deposit') {
        balance += amount;
        document.getElementById("screenText").textContent = `Deposited $${amount}. New balance: $${balance}`;
    }

    clearAmount();
}