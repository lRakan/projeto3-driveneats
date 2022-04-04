let itemsCount = 0;

let dish = null;
let dishPrice = null;
let drink = null;
let drinkPrice = null;
let dessert = null;
let dessertPrice = null;

function selectDish(div, description, price) {
    uncheckItem('dish');
    div.classList.add("selected");
    dish = description;
    dishPrice = price;
    itemsCount = itemsCount + 1;

    releaseOrder();
}

function selectDrink(div, description, price) {
    uncheckItem('drink');
    div.classList.add("selected");
    drink = description;
    drinkPrice = price;
    itemsCount = itemsCount + 1;

    releaseOrder();
}

function selectDessert(div, description, price) {
    uncheckItem('dessert');
    div.classList.add("selected");
    dessert = description;
    dessertPrice = price;
    itemsCount = itemsCount + 1;

    releaseOrder();
}

function confirmOrder() {
    const button = document.querySelector("footer button");
    if(itemsCount === 3) {
        button.disabled = false;
        button.innerHTML = "Fechar pedido";
        button.classList.add("ready");
    }else{
        button.disabled = true;
        button.innerHTML = "Selecione os 3 itens para fechar o pedido";
        button.classList.remove("ready");
    }
}

function uncheckItem(item) {
    const selectedItem = document.querySelector(`.${item} .selected`);
    if(selectedItem !== null) {
        selectedItem.classList.remove("selected");
        itemsCount = itemsCount - 1;
    }
}