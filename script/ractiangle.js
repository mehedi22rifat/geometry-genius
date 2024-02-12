
function rectiangleCalcluteArea(){
    // rectiangle width set 
     const rectiangleWidthInput = document.getElementById('ractiangle-width');
     const rectiangleWidthText = rectiangleWidthInput.value;
     const width = parseFloat(rectiangleWidthText);
     

// rectiangle heightset

     const rectiangleHeihtInput= document.getElementById('rectiangle-hight');
     const rectiangleheightText = rectiangleHeihtInput.value;
     const height = parseFloat(rectiangleheightText);


    //  rectiangle are claclute

    
        const area = width*height;


        // rectiange value set
        const valueSet = document.getElementById('ractiangle-value-set');
        valueSet.innerText=area;
}












