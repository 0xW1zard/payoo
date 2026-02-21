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

// button

function setbutton(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const History = document.getElementById('history')

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    History.classList.add('hidden');



    const select = document.getElementById(id);
    select.classList.remove('hidden');
}

