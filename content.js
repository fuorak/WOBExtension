var images = document.getElementsByTagName('img');
const qty = document.getElementById('orderquantity_val');
const qtyToBuild = document.getElementById('quantity');
const qtyInput = document.getElementById('quantity_formattedValue');
const completedQty = document.getElementById('completedquantity_formattedValue');
const startingOperation = document.getElementById('inpt_startoperation1');
const endingOperation = document.getElementById('inpt_endoperation2');
const startingOperationIndex = document.getElementById('indx_startoperation1');
const endingOperationIndex = document.getElementById('indx_endoperation2');
const startingOperationHidden = document.getElementById('hddn_startoperation1');
const endingOperationHidden = document.getElementById('hddn_endoperation2');

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

const operationTable = document.getElementById('operationheader');
const compTable = document.getElementById('componentheader');
const rows = compTable.getElementsByTagName('tr');
const opRows = operationTable.getElementsByTagName('tr');

let endOp = opRows.length - 1;
let netsuiteNumber = 17963256;

completedQty.value = qty.innerHTML;
startingOperation.title = 1;
startingOperation.value = 1;
endingOperation.title = endOp;
endingOperation.value = endOp;

startingOperationIndex.value = 1;
endingOperationIndex.value = endOp;

startingOperationHidden.value = netsuiteNumber;
endingOperationHidden.value = netsuiteNumber + (endOp - 1);

for (let i = 1; i < rows.length; i++) {
    const currentRow = rows[i];
    const cells = currentRow.getElementsByTagName('td');

    const thirdColumnValue = cells[2].innerText;
    cells[3].innerText = thirdColumnValue * qty.innerHTML;
}