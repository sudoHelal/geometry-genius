function pentagonArea(){
    const sideInputId = document.getElementById('side-input');
    const sideInputValue = sideInputId.value;
    const sideInput = parseFloat(sideInputValue);

    const lengthInputId = document.getElementById('length-input');
    const lengthInputValue = lengthInputId.value;
    const lengthInput = parseFloat(lengthInputValue);

    const area = (5/2)*sideInput * lengthInput;

    const pentagonResult = document.getElementById('pentagon-result');
    pentagonResult.innerText = area;
    
}