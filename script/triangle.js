function calculateTriangleArea(){
    const triangleBaseFeild = document.getElementById('triangleBase');
    const triangleBaseText = triangleBaseFeild.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeight = document.getElementById('triangleHeight');
    const triangleHeightFeild = triangleHeight.value;
    const height = parseFloat(triangleHeightFeild);
    console.log(height);
    let area = 0.5 * base * height;
    let resultFeild = document.getElementById('area-calculate');
     resultFeild.innerText =  area;
    // console.log(resultValue); 


   

}