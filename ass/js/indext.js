let balance = 50000;

function login() {
    const username = document.getElementById("username").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const errorMessage = document.getElementById("error-message");

    if (password1 === password2) {
        // Successful login, show user actions
        document.getElementById("user-actions").style.display = "block";
        document.getElementById("user-name").textContent = username;
        errorMessage.style.display = "none";
        document.querySelector(".login-box").style.display = "none"; // إخفاء صندوق تسجيل الدخول بعد النجاح
    } else {
        // Passwords don't match, show error message
        errorMessage.style.display = "block";
    }
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value);
    if (amount > 0 && balance >= amount) {
        balance -= amount;
        updateBalance();
        alert("Withdrawal successful. New balance: $" + balance);
    } else {
        alert("Insufficient balance or invalid amount.");
    }
}

function deposit() {
    const amount = Number(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        alert("Deposit successful. New balance: $" + balance);
    } else {
        alert("Invalid amount.");
    }
}

function transfer() {
    const amount = Number(document.getElementById("amount").value);
    if (amount > 0 && balance >= amount) {
        balance -= amount;
        updateBalance();
        alert("Transfer successful. New balance: $" + balance);
    } else {
        alert("Insufficient balance or invalid amount.");
    }
}

function updateBalance() {
    document.getElementById("balance").textContent = balance;
}
