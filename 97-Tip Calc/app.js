function calculateTip() {
    let billAmount = parseFloat(document.getElementById("bill").value);
    let tipPercentage = parseFloat(document.getElementById("tip").value);
    let numberOfPeople = parseInt(document.getElementById("people").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount");
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please enter a valid tip percentage");
        return;
    }
    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter a valid number of people");
        return;
    }

    let totalTip = (billAmount * tipPercentage) / 100;
    let tipPerPerson = totalTip / numberOfPeople;

    document.getElementById("total-tip").innerText = totalTip.toFixed(2);
    document.getElementById("tip-per-person").innerText = tipPerPerson.toFixed(2);
}
