var images = document.getElementsByTagName('img');
const qty = document.getElementById('orderquantity_val');
const qtyToBuild = document.getElementById('quantity');
const qtyInput = document.getElementById('quantity_formattedValue');
const completedQty = document.getElementById('completedquantity_formattedValue');
const startingOperation = document.getElementById('inpt_startoperation1');
const endingOperation = document.getElementById('inpt_endoperation2');

const operationrow0 = document.getElementById('operationrow0');
const operationrow1 = document.getElementById('operationrow1');
const operationrow2 = document.getElementById('operationrow2');
const operationrow3 = document.getElementById('operationrow3');
const operationrow4 = document.getElementById('operationrow4');
const operationrow5 = document.getElementById('operationrow5');
const operationrow6 = document.getElementById('operationrow6');
const operationrow7 = document.getElementById('operationrow7');
const operationrow8 = document.getElementById('operationrow8');
const operationrow9 = document.getElementById('operationrow9');
const operationrow10 = document.getElementById('operationrow10');

let endOp = 0;

if (operationrow10 != null) {
    endOp = 11;
} else if (operationrow9 != null) {
    endOp = 10;
} else if (operationrow8 != null) {
    endOp = 9;
} else if (operationrow7 != null) {
    endOp = 8;
} else if (operationrow6 != null) {
    endOp = 7;
} else if (operationrow5 != null) {
    endOp = 6;
} else if (operationrow4 != null) {
    endOp = 5;
} else if (operationrow3 != null) {
    endOp = 4;
} else if (operationrow2 != null) {
    endOp = 3;
} else if (operationrow1 != null) {
    endOp = 2;
} else if (operationrow0 != null) {
    endOp = 1;
}

//qtyToBuild.setAttribute('value', qty.innerHTML);
//qtyToBuild.value = qty.innerHTML;
completedQty.value = qty.innerHTML;
//qtyInput.value = qty.innerHTML;
startingOperation.value = 1;

endingOperation.value = endOp;
