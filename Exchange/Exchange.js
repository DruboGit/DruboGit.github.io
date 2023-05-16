class Money{
    constructor(amount,type){
        this.amount = amount;
        this.type = type;
    }
}

const input_price = document.getElementById("price");
const input_payed = document.getElementById("payed");

const answer_div = document.getElementById("answer_div");

const calculatebutton = document.getElementById("calculate");
calculatebutton.addEventListener("click", calculateClick);

function exChange(payed, price) {
    return Math.floor(payed / price);
}


function getExchangeArray(payed, price){
    let amount_coins = 0
    let money_back = 0

    note_coin_array = []

    money_back = payed - price
    amount_coins = exChange(money_back, 500)
    money_back = money_back % 500

    console.log(`coinamount=${amount_coins}  : moneyBack=${money_back}`)
    
    let t_money = new Money(0, 500)
    
    if (amount_coins > 0)
        t_money.amount = amount_coins
    
    note_coin_array.push(t_money) 

    amount_coins = exChange(money_back, 100)
    money_back = money_back % 100

    t_money = new Money(0, 100)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)

        amount_coins = exChange(money_back, 50)
    money_back = money_back % 50

    t_money = new Money(0, 50)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)

        amount_coins = exChange(money_back, 20)
    money_back = money_back % 20

    t_money = new Money(0, 20)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)
        
        amount_coins = exChange(money_back, 10)
    money_back = money_back % 10

    t_money = new Money(0, 10)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)
        
        amount_coins = exChange(money_back, 5)
    money_back = money_back % 5

    t_money = new Money(0, 5)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)

        amount_coins = exChange(money_back, 1)
    money_back = money_back % 1

    t_money = new Money(0, 1)

    if (amount_coins > 0)
        t_money.amount = amount_coins

        note_coin_array.push(t_money)

        return note_coin_array
}

function calculateClick(e){
    let t_price = parseInt(input_price.value);
    let t_payed = parseInt(input_payed.value);

    if (t_price > t_payed){
        alert("MORE MONEY BITCH!")
    }
    else{
        const exchange_array = getExchangeArray(t_payed, t_price);

        answer_div.innerHTML = `<b>payed= ${t_payed} kr, price= ${t_price} kr</b>
        <br><h3>change back:</h3>
        Fivehundred: ${exchange_array[0].amount}
        <br>Hundred: ${exchange_array[1].amount}
        <br>Fifty: ${exchange_array[2].amount}
        <br>Twenty: ${exchange_array[3].amount}
        <br>Ten: ${exchange_array[4].amount}
        <br>Five: ${exchange_array[5].amount}
        <br>One: ${exchange_array[6].amount}`
    }
}