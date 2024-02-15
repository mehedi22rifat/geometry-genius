function ParallelogramAreaClaclute(){
    // base input
   const parallelogramBaseInput = document.getElementById('parallelogram-base');
   const parallelogramText = parallelogramBaseInput.value;
   const base = parseFloat(parallelogramText);
  
//    height input;
   const parallelogramHightInput = document.getElementById('parallelogram-height');
   const parallelogramHeightText = parallelogramHightInput.value;
   const height = parseFloat(parallelogramHeightText);
   
// calclute base* hight;
  const area = base*height;

//   set korhbo 
 const setKorbo = document.getElementById('parallelogram-value-set');
 setKorbo.innerText =area;


}



