document.getElementById("button").addEventListener("click", function () {
  const Number = document.getElementById("input-num").value;

  const pin = document.getElementById("input-pin").value;

  if (Number === "01234567890" && pin === "1234") {
    alert("Login Successful");
    window.location.assign("home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
