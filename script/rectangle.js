function rectangleArea(){
    const lengthFeild = document.getElementById("width-feild");
    const lengthFeildText = lengthFeild.value;
const length = parseFloat(lengthFeildText);
const widthFeild = document.getElementById("length-feild");
const widthFeildText = widthFeild.value;
const width = parseFloat(widthFeildText);

console.log(length,width);

const rectanlgeResult = length * width;

const rectangleOutput = document.getElementById("rectangle-result");
 rectangleOutput.innerText = rectanlgeResult;
}
