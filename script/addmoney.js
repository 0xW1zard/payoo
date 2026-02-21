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
    alert(`Money Added from ${bank} 
    Ammount:${addAmmount}`)
  } else {
    alert("Pin Wrong");
    return;
  }
});
