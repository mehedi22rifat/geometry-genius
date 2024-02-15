function romboshCalcluteArea(){
    // rombosh d1 
    const romboshD1Input = document.getElementById('rombosh-d1');
    const romboshD1Text = romboshD1Input.value;
    const d1 = parseFloat(romboshD1Text);

    // rombosh d2
    const romboshD2Input = document.getElementById('rombosh-d2');
    const romboshd2Text = romboshD2Input.value;
    const d2 = parseFloat(romboshd2Text);

    // final area claclute 
    const area = 0.5 * d1 * d2;
    // console.log(area);

    // area set korbo
    const setArea = document.getElementById('rombosh-area-set');
    setArea.innerText=area;
    
}