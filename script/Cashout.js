document.getElementById("button").addEventListener("click", function () {
  const agent = document.getElementById("agent-num").value;

  if (agent.length != 11) {
    alert("Wrong Agent number");
    return;
  }

  const Balance = document.getElementById("balance");
  const currentBalance = Balance.innerText;

  const ammount = document.getElementById("ammount").value;
  const newbal = Number(currentBalance) - Number(ammount);

  if (newbal < 0 || ammount > currentBalance || ammount <= 0) {
    alert("Invalid Ammount");
    return;
  }

  const pin = document.getElementById("input-pin").value;

  if (pin === "1234") {
    Balance.innerText = newbal;
  } else {
    alert("Pin Wrong");
    return;
  }
});
