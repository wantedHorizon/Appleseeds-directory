
//increase chart buttons 
const addToChartButtons = document.querySelectorAll('.main-product__page__right-col__cart-management__buttons button');
const addToListButton = document.querySelector('.main-product__page__right-col__cart-management__buttons_add button');

const chartIncreaseHandler = (e) => {
    console.log("chart increased");
    const amountDiv = document.querySelector('.toolbar__cart__amount '); 
    const qtyToAdd = parseInt(document.querySelector('.main-product__page__right-col__cart-management__amount select').value);

    let amount = parseInt( amountDiv.textContent);
    
    if(isNaN(amount) || amount <0 ){
        console.error(`amount "${amount}" is invalid`);
        return;
    }
    if(isNaN(qtyToAdd) || qtyToAdd<1 || qtyToAdd >10){
        console.error(`qty "${qtyToAdd}" is invalid`);
        return;
    }
    amount+=qtyToAdd;
    amountDiv.textContent = `${amount}`;


}

addToChartButtons.forEach( btn => btn.addEventListener('click',chartIncreaseHandler));
addToListButton.addEventListener('click', chartIncreaseHandler);
