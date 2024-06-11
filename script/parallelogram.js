function parallelogramArea(){
    const baseField = document.getElementById('base-feild');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    const heightFeild = document.getElementById('height-feild');
    const heightFeildText = heightFeild.value;
    const height = parseFloat(heightFeildText);

    const area = base * height;
   
    
    const parallelogramOutputResult = document.getElementById('parallelogram-result-feild');
    parallelogramOutputResult.innerText = area; 
}