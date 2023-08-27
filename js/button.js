let total = 0;
function handleClick(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[3].childNodes[3].innerText;
    const count = selectedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML= `${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);


    const price = target.parentNode.childNodes[3].childNodes[5].innerText.split(' '[0]);
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total-price').innerText = total;
    let discount = 0;
    if(total >= 1){
        const makeButton = document.getElementById('make-purchase');
        makeButton.removeAttribute('disabled');
    }
    if(total >= 200){
        const applyButton =document.getElementById('btn-apply');
        applyButton.removeAttribute('disabled');

        document.getElementById('btn-apply').addEventListener('click', function(){

            const discountField = document.getElementById('discount');
            const previousDiscountTotalString = discountField.innerText;
            const previousDiscountTotal = parseFloat(previousDiscountTotalString);
            const inputField = document.getElementById('text-field');
            const input = inputField.value;
            total.innerText=input;
            if(input === 'SELL200'){
                const discount = ((total*20)/100);
                discountField.innerText = discount.toFixed(2);
                const totalAmount = document.getElementById('total');
                const result = total - previousDiscountTotal;
                totalAmount.innerText= result.toFixed(2);


            }
        })
        
    }
    else{
        applyButton.setAttribute('disable', 'true');
    }


}
 



