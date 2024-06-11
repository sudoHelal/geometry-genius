function rhombus(){
    const rhombusDiagonal1 = document.getElementById('diagonal1');
    const rhombusDiagonal1Value = rhombusDiagonal1.value;
    const rhombusDia1 = parseFloat(rhombusDiagonal1Value)
    
    const rhombusDiagonal2 = document.getElementById("diagonal2");
    const rhombusDiagonal2Value = rhombusDiagonal2.value;
    const rhombusDia2 = parseFloat(rhombusDiagonal2Value);

    const area = 0.5 *(rhombusDia1 * rhombusDia2);

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;

}