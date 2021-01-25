const loginBtn = document.getElementById("login")
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"
    const transactionArea = document.getElementById("Transaction-area")
    transactionArea.style.display = "block"
})

const addDepositBtn = document.getElementById("addDeposit")
addDepositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const balanceAmount = document.getElementById("currentBalance").innerText;
    const balanceNumber = parseFloat(balanceAmount);
    const totalDeposit = depositNumber + currentDepositNumber;
    const balanceDeposit = depositNumber + balanceNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("currentBalance").innerText = balanceDeposit;
    document.getElementById("depositAmount").value = "";
})

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener('click', function () {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    
    const currentWithdrawAmount = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmount);
    const totalWithdrawAmount = withdrawAmountNumber + currentWithdrawAmountNumber;
    const withdrawAfterBalance = document.getElementById("currentBalance").innerText;
    const totalBalance = parseFloat(withdrawAfterBalance);
    const balance =totalBalance -withdrawAmountNumber;
    document.getElementById("currentBalance").innerText = balance; 
    document.getElementById("currentWithdraw").innerText = totalWithdrawAmount;
    document.getElementById("withdrawAmount").value = "";
})