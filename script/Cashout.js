document.getElementById("button").addEventListener("click", function () {
  const agent = getValue("agent-num");

  if (agent.length != 11) {
    alert("Wrong Agent number");
    return;
  }

  const Balance = getBalance("balance");

  const ammount = getValue("ammount");
  const newbal = Number(Balance) - Number(ammount);

  if (newbal < 0 || ammount > Balance || ammount <= 0) {
    alert("Invalid Ammount");
    return;
  }

  const pin = getValue("input-pin");

  if (pin === "1234") {
    setBal(newbal);
  } else {
    alert("Pin Wrong");
    return;
  }
});
