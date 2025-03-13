document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalAmount = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function updateExpenseList() {
        expenseList.innerHTML = "";
        let total = 0;

        expenses.forEach((expense, index) => {
            total += expense.amount;
            const li = document.createElement("li");
            li.innerHTML = `
                ${expense.name}: ₹${expense.amount}
                <button onclick="deleteExpense(${index})">Delete</button>
            `;
            expenseList.appendChild(li);
        });

        totalAmount.innerText = `Total: ₹${total}`;
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    window.deleteExpense = function (index) {
        expenses.splice(index, 1);
        updateExpenseList();
    };

    expenseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

        if (expenseName.trim() === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        expenses.push({ name: expenseName, amount: expenseAmount });
        updateExpenseList();

        expenseForm.reset();
    });

    updateExpenseList();
});
