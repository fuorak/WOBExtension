var images = document.getElementsByTagName('img');
const qty = document.getElementById('orderquantity_val');
const qtyToBuild = document.getElementById('quantity');
const qtyInput = document.getElementById('quantity_formattedValue');
const completedQty = document.getElementById('completedquantity_formattedValue');

/*
 * So, the next 6 lines have a weird quirk. See how they are all labeled with a number?
 * Well on my machine, the fields are called startoperation1 and endoperation2
 * But on a different machine, such as dennis' pc, the fields are called startoperation2 and endoperation2
 * We need to write a function that detects which fields are actually being used and changes them all accordingly
 */
const startingOperation = document.getElementById('inpt_startoperation1');
const endingOperation = document.getElementById('inpt_endoperation2');
const startingOperationIndex = document.getElementById('indx_startoperation1');
const endingOperationIndex = document.getElementById('indx_endoperation2');
const startingOperationHidden = document.getElementById('hddn_startoperation1');
const endingOperationHidden = document.getElementById('hddn_endoperation2');

const completedQtyActual = document.getElementById('completedquantity');

const operationTable = document.getElementById('operation_splits');
const compTable = document.getElementById('component_splits');
const divs = document.getElementsByTagName('div');

const rows = compTable.getElementsByTagName('tr');
const opRows = operationTable.getElementsByTagName('tr');

let endOp = opRows.length - 1;

/*the magic netsuite numbers.... we need these to be correct each time for starting an end operation, but they vary from form to form.
 *What we need to do is search all divs for any div with the attribute: class "ns-dropdown" and the attribute: data-name "startoperation"
 *this div will have an attribute called data-options that contians an array with values to represent 1-whatever
 * i am here to find this number.
 */

let startNetsuiteNumber = 17986474;

for (let i = 0; i < divs.length; i++) {
    if (divs[i].getAttribute('class') === "ns-dropdown" && divs[i].getAttribute('data-name') === "startoperation") {
        const valueArray = divs[i].getAttribute('data-options');
        const optionsArray = JSON.parse(valueArray);

        for (const option of optionsArray) {
            if (option.text === '1') {
                startNetsuiteNumber = option.value;
                break;
            }
        }
    }
}

//netsuite needs events. lets give it to em
const eventChange = new Event('change', { bubbles: true });
const eventKeyDown = new KeyboardEvent('keydown', { bubbles: true });
const eventKeyUp = new KeyboardEvent('keyup', { bubbles: true });
const eventKeyPress = new KeyboardEvent('keypress', { bubbles: true });
const eventFocus = new FocusEvent('focus', { bubbles: true });
const eventMouseDown = new MouseEvent('mousedown', { bubbles: true });
const eventBlur = new FocusEvent('blur', { bubbles: true });
const eventInput = new InputEvent('input', { bubbles: true });

//starting operation
startingOperation.dispatchEvent(eventFocus);
startingOperation.dispatchEvent(eventKeyPress);
startingOperation.dispatchEvent(eventInput);

startingOperation.title = 1;
startingOperation.value = 1;
startingOperationIndex.value = 1;
startingOperationHidden.value = startNetsuiteNumber;

startingOperation.dispatchEvent(eventInput);
startingOperation.dispatchEvent(eventKeyDown);
startingOperation.dispatchEvent(eventKeyPress);
startingOperation.dispatchEvent(eventChange);
startingOperation.dispatchEvent(eventBlur);

//ending operation
endingOperation.dispatchEvent(eventFocus);
endingOperation.dispatchEvent(eventKeyPress);
endingOperation.dispatchEvent(eventInput);

endingOperation.title = endOp;
endingOperation.value = endOp;
endingOperationIndex.value = endOp;
endingOperationHidden.value = parseInt(startNetsuiteNumber) + (endOp - 1);

endingOperation.dispatchEvent(eventInput);
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

completedQty.dispatchEvent(eventFocus);
completedQty.dispatchEvent(eventKeyUp);
completedQty.dispatchEvent(eventMouseDown);
completedQty.dispatchEvent(eventKeyPress);
completedQty.dispatchEvent(eventKeyUp);
completedQty.dispatchEvent(eventChange);
completedQty.dispatchEvent(eventChange);
completedQty.dispatchEvent(eventBlur);

completedQtyActual.dispatchEvent(eventFocus);
completedQtyActual.dispatchEvent(eventChange);
completedQtyActual.dispatchEvent(eventBlur);



