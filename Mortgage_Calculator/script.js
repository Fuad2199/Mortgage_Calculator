document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    const monthlyPayment = (amount * interest) / (1 - Math.pow(1 + interest, -years));

    if (isFinite(monthlyPayment)) {
        document.getElementById('monthly-payment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('monthly-payment').innerText = 'Please check your input';
    }
});

