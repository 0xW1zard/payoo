document.getElementById("add-button").addEventListener("click", function () {
  const bank = getValue("add-bank");
  if (bank == "Select Bank") {
    alert("Selct a Bank");
    return;
  }

  const agent = getValue("add-agent-num");
  if (agent.length != 11) {
    alert("Wrong Agent number");
    return;
  }

  const addAmmount = getValue("add-ammount");
  if (addAmmount <= 0) {
    alert("Funny");
    return;
  }

  const balance = getBalance("balance");
  const total = Number(addAmmount) + Number(balance);

  const pin = getValue("add-input-pin");
  if (pin === "1234") {
    setBal(total);
    alert("Money Added");

    // adding to history

    const history = document.getElementById("his-cont");

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="p-5 bg-base-100 flex gap-2.5 items-center">
    <div class="bg-base-200 p-3 rounded-full w-fit"> <img src="assets/opt-1.png" alt=""></div>
    <p>Money Added from ${bank} Ammount:${addAmmount}</p>
            </div>
    `;

    history.append(newDiv);
  } else {
    alert("Pin Wrong");
    return;
  }
});
