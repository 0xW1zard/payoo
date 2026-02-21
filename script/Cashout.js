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

    const history = document.getElementById("his-cont");

    const newDiv = document.createElement("div");
      newDiv.innerHTML = `
    <div class="p-5 bg-base-100 flex gap-2.5 items-center">
    <div class="bg-base-200 p-3 rounded-full w-fit"> <img src="assets/opt-1.png" alt=""></div>
    <p>Cash out ${ammount} | New Balance ${newbal}</p>
            </div>
    `;

    history.append(newDiv);
  } else {
    alert("Pin Wrong");
    return;
  }
});
