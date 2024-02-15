function pentagonCalcluteArea(){
    // base input p
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText);
    

   //  b input
   const pentagonbInput = document.getElementById('pentagon-b');
   const pentagonbText = pentagonbInput.value;
   const b= parseFloat(pentagonbText);

   // area
     const area = 0.5 * p * b;

   // area set
   const areaSet = document.getElementById('pentagon-area-set');
   areaSet.innerText=area;



}


