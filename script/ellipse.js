function ellipseArea(){
    const majorAxisId = document.getElementById('major-axis');
    const majorAxisIdValue = majorAxisId.value;
    const majorAxis = parseFloat(majorAxisIdValue);

    const minorAxisId = document.getElementById("minor-axis");
    const minorAxisValue = minorAxisId.value;
    const minorAxis = parseFloat(minorAxisValue); 

    const area = 3.1416*(majorAxis * minorAxis);

    const ellipseAreaOutput = document.getElementById('ellipse-result');
    ellipseAreaOutput.innerText = area;
}