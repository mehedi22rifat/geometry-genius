
function clacluteTraingle(){
    // triangle base input
    const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseText = triangleBaseInput.value;
     const base = parseFloat(triangleBaseText);
    //  console.log(base)
    
//    triangle hight input

const trianglehightInput = document.getElementById('triangle-hight');
const trianglehightText= trianglehightInput.value;
const hight = parseFloat(trianglehightText);
// console.log(hight);


// triangle area claclute 
  const area = 0.5*base*hight;
  console.log(area);

  
// triangle vlaue set
const valueSet = document.getElementById('triangle-value-set');
valueSet.innerText = area;


}



