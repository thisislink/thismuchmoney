document.querySelector("button").addEventListener("click", calculateCost);

function calculateCost() {
    let getCostInput = document.querySelector("input").value;
    let needPerMonth = (getCostInput / 12).toFixed(2);
    let perCustomer = (needPerMonth / 100).toFixed(2);
    console.log(`$${needPerMonth} per month`);
    console.log(`100 customers = $${perCustomer} per customer`);
    document.querySelector(".result").textContent = `$${needPerMonth} per month`;
    document.querySelector(".customers").textContent = `100 customers or 100 sales = $${perCustomer} per customer or $${perCustomer} per sale.`;
}