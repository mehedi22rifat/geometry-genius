// function ellipseCalcluteArea(){
//     // ellipse a inpute 
//     const ellipseAInput = document.getElementById('ellipse-a');
//     const ellipseAText = ellipseAInput.value;
//     const a=parseFloat(ellipseAText);

//     // ellipse b inpute
//     const ellipseBInput = document.getElementById('ellipse-b');
//     const ellipseBText = ellipseBInput.value;
//     const b=parseFloat(ellipseBText);

//     // area calclute
//     const area = 3.1416 * a * b;


//     // value set 
//     const setKorbo = document.getElementById('ellipse-area-set');
//     setKorbo.innerText=area;

// }

function clacluteEllipseArea(){
    const a = getInputVlaueById('ellipse-a');
    console.log(a)
}


function getInputVlaueById(inputFieldId){
    const inputFieldId=  document.getElementById(inputFieldId);
    const inputFieldIdText = inputFieldId.value;
    const inputValue = parseFloat(inputFieldIdText);
    return inputValue;
}




