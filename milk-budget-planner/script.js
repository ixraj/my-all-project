function getMilk(money, costPerBottle) {
    const numberOfBottles = calcBottles(money, costPerBottle);
    const change = calcChange(money, costPerBottle);
    return { numberOfBottles, change };
}

function calcBottles(startingMoney, costPerBottle) {
    return Math.floor(startingMoney / costPerBottle);
}

function calcChange(startingAmount, costPerBottle) {
    return startingAmount % costPerBottle;
}

document.getElementById("milkForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const money = parseFloat(document.getElementById("money").value);
    const costPerBottle = parseFloat(document.getElementById("costPerBottle").value);
    const { numberOfBottles, change } = getMilk(money, costPerBottle);
    document.getElementById("result").innerText = `Hello maalik ji 🙏, you can buy ${numberOfBottles} bottles of milk. Here is your ${change} change.`;
});
