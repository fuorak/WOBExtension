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
const completedQtyActual = document.getElementById('completedquantity');

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

const operationTable = document.getElementById('operation_splits');
const compTable = document.getElementById('component_splits');

const rows = compTable.getElementsByTagName('tr');
const opRows = operationTable.getElementsByTagName('tr');

let endOp = opRows.length - 1;
let netsuiteNumber = 17963256; //startoperation is 17986474 which equates to 1
let startNetsuiteNumber = 17986474;

const eventChange = new Event('change', { bubbles: true });
const eventKeyDown = new Event('keydown', { bubbles: true });
const eventKeyUp = new Event('keyup', { bubbles: true });
const eventKeyPress = new Event('keypress', { bubbles: true });
const eventFocus = new Event('focus', { bubbles: true });
const eventMouseDown = new Event('mousedown', { bubbles: true })
const eventBlur = new Event('blur', { bubbles: true })

//alert(qty.innerHTML);
//alert(qty.innerText);

startingOperation.title = 1;
startingOperation.value = 1;
startingOperationIndex.value = 1;
startingOperationHidden.value = startNetsuiteNumber;

startingOperation.dispatchEvent(eventMouseDown);
startingOperation.dispatchEvent(eventFocus);
startingOperation.dispatchEvent(eventKeyDown);
startingOperation.dispatchEvent(eventKeyPress);
startingOperation.dispatchEvent(eventChange);
startingOperation.dispatchEvent(eventBlur);

endingOperation.title = endOp;
endingOperation.value = endOp;
endingOperationIndex.value = endOp;
endingOperationHidden.value = startNetsuiteNumber + (endOp - 1);

endingOperation.dispatchEvent(eventMouseDown);
endingOperation.dispatchEvent(eventFocus);
endingOperation.dispatchEvent(eventKeyDown);
endingOperation.dispatchEvent(eventKeyPress);
endingOperation.dispatchEvent(eventChange);
endingOperation.dispatchEvent(eventBlur);


try {

    if (qty.innerText === null) {
        qty.innerText = 1;
    }
    completedQty.value = qty.innerText;
    completedQtyActual.value = qty.innerText;
} catch (error) {
    qty.innerText = 1;
    completedQty.value = 1;
    completedQtyActual.value = 1;
}

completedQty.dispatchEvent(eventKeyUp);
completedQty.dispatchEvent(eventMouseDown);
completedQty.dispatchEvent(eventFocus);
completedQty.dispatchEvent(eventKeyPress);
completedQty.dispatchEvent(eventKeyUp);
completedQty.dispatchEvent(eventChange);
completedQty.dispatchEvent(eventBlur);
completedQty.dispatchEvent(eventChange);

completedQtyActual.dispatchEvent(eventKeyUp);
completedQtyActual.dispatchEvent(eventMouseDown);
completedQtyActual.dispatchEvent(eventFocus);
completedQtyActual.dispatchEvent(eventKeyPress);
completedQtyActual.dispatchEvent(eventKeyUp);
completedQtyActual.dispatchEvent(eventChange);
completedQtyActual.dispatchEvent(eventBlur);
completedQtyActual.dispatchEvent(eventChange);


for (let i = 1; i < opRows.length; i++) {
    const currentRow = opRows[i];
    const cells = currentRow.getElementsByTagName('td');

    if (cells[2].innerHTML.includes('/app/accounting') {
        alert("test");
    }

    /*
    const thirdColumnValue = cells[2].innerText;
    const fourthColumnField = document.getElementById('quantity' + i);
    //cells[3].innerText = thirdColumnValue * qty.innerHTML;
    fourthColumnField.value = thirdColumnValue * qty.innerHTML;
    */
}



