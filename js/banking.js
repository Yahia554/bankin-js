// deposite
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposite
    const depositeInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositeInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositeTotal = document.getElementById('deposit-total');
    const previousDepositText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositeTotal.innerText = newDepositTotal;

    // update Accunt balance
    const balaceTotal = document.getElementById('balance-total');
    const previousBalanceText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balaceTotal.innerText = newBalanceTotal;

    // clen deposit input
    depositeInput.value = '';
});
//  Handle withdraw amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update Accunt balance
    const balaceTotal = document.getElementById('balance-total');
    const previousBalanceText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balaceTotal.innerText = newBalanceTotal;

    // cliar withdraw
    withdrawInput.value = '';
});