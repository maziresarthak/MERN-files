document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  //  Now the below totalAmount will be given back by a method, that method will go into expenses array and will get all the amounts and nos by looping through it and will get it back, as of now we will just make the defination of calculateTotal() and rest all we will do it further
  let totalAmount = calculateTotal();

  expenseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent action and post method and so on which takes place when submitting
    const name = expenseNameInput.value.toLowerCase().trim(); // Lowercase chi khara garaz nahiye but hyachi savay asna changli goshta ahe karan pudhe kadhi api call kartan ajasa pokeapi cha project kelta tithe jas pokemon search karatan lowercase pahije fakt tasah kadhi condition yeu shaktte
    // console.log(typeof expenseAmountInput.value.trim()); // One problem for form is that whenevr any form is submitted no matter where every single input comes up into the string format even when we mention the input type=number still we get as string format,  so we need to convert this into an int/float
    const amount = parseFloat(expenseAmountInput.value.trim());

    // Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). THis is defination for isNan that if the given thing is not a number we get a boolean true but for now the amount input should be a number so we use !isNan to reverse ites defination
    // We want all true cases that name should not be empty, amount should be a number, amount should also be greater than 0 if this is true I want to do the further operations
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        // name : name,
        // amount : amount,
        name,
        amount,
        // Above both the methods are correct but js has this feature which we can directly use instead of using name key and then name value this and that
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal(); // What updateTotal() does is that calculatTotal() is calculating the toal and we just want to show/render total on screen, this method does it, also like jevha add karel expense tevha total 0 ne total la change honar ani jevha sagle expense remove karel tevha total pasun 0 la yenar, ofc basic math thats why we want this updateTotal() mtehod

      // Clear input after submissiong :
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0); // I have added the bookmark for the explanation of this method on lecture 84 just to save time but he for, while loop madhe adhi apan je karaycho c madhe kiva python madhe same tech ahe
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function renderExpenses() {
    // First of all go to that particular place flush out everything, clear the current list bcoz there might be already values loop through the values and create new elemen, same stuff as earlier project
    expenseList.innerHTML = ""; // he same adhichya project sarkhach aplyayla atla html clear thevava lagta for proper rendering
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${expense.name} - $${expense.amount}
      <button data-id='${expense.id}'>Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  expenseList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const expenseId = parseInt(event.target.getAttribute("data-id")); // ofc he string madhe yeta we want to convert this into int
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });

  renderExpenses(); // As earlier project dom load jhala ki adhiche kuthle exxpenses asitl tar te add karayche asetil tar we have to call this method
  updateTotal(); // Ata he sudha similar concept ahe jevha hi method me last la call keli nahi ani dom refresh kela ki total 0 hoycha so adhicha kuthla expense refresh nantar  render jhala renderExpense() method ne tya nantar adhicha total sudha render karnyasathi updateTotal() at the end
});
