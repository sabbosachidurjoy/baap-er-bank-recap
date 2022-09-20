/* 
1. add event handler with the wihtdraw button
2. get withdraw amount from the deosit input field
2-5. Convart string withdraw amount to a number type

3. clear the withdraw input fieled after getting the value

4. get the previous withdraw total

5. calculate total withdraw amount and set it to the withdraw total element

6. get previous balance

 7. calculate new balance and set it to the balance total element
*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const wihtdrawField = document.getElementById('withdraw-field');
    newWithdrawAmountString = wihtdrawField.value;
    newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3
    wihtdrawField.value = '';

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})