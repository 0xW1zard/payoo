// value

function getValue(id){
    const value = document.getElementById(id).value;
    return value;
}

// balance

function getBalance(){
    const balanceEle = document.getElementById('balance');
    const balance = balanceEle.innerText;
    return balance;
}

// set Balance

function setBal(val){
    const balanceEle = document.getElementById('balance');
    balanceEle.innerText = val;
}