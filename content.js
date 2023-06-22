var images = document.getElementsByTagName('img');
const qty = document.getElementById('orderquantity_val');
const qtyToBuild = document.getElementById('quantity');
const qtyInput = document.getElementById('quantity_formattedValue');
const completedQty = document.getElementById('completedquantity_formattedValue');
const startingOperation = document.getElementById('inpt_startoperation1');
const endingOperation = document.getElementById('inpt_endoperation2');

//qtyToBuild.setAttribute('value', qty.innerHTML);
//qtyToBuild.value = qty.innerHTML;
completedQty.value = qty.innerHTML;
//qtyInput.value = qty.innerHTML;
startingOperation.value = 1;
endingOperation.value = 100;

for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}