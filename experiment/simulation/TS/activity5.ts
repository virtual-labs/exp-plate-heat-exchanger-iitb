let a5_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity6();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;

let dd1: HTMLSelectElement;
let dd2: HTMLSelectElement;
let dd3: HTMLSelectElement;
let dd4: HTMLSelectElement;


function activity5() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);

    pp.showtitle('<p id="exp-title">Set Values</p>', 3);
    pp.showdescription('<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 8px);">Note down these values and click next</div>', 3);

    let text = `
    <h3 style='font-size: 27px; text-align: center; color: white; background-color: #8A96FC; padding: 1vw;'>Select the below Values</h3>
    <br>
    <div  class="container"; style="display: grid; text-align: center; grid-template-columns: 1fr 1fr; grid-row-gap: 2vw; font-size: 20px; font-weight: 600;">
        <div>Heat Capacity, C<sub>p</sub> (J/gm-K)</div>
        <div><select disabled name="" class='form-select' id="a5-dd1" >
        </select></div>

        <div>Density, &#120530; (gm/cc)</div>
        <div><select disabled name="" class='form-select' id="a5-dd2" >
        </select></div>

        <div>Viscosity, &mu; (cp)</div>
        <div><select disabled name="" class='form-select' id="a5-dd3" >
        </select></div>

        <div>Thermal Conductivity, K (W/m-K)</div>
        <div><select disabled name="" class='form-select' id="a5-dd4">
        </select></div>
    </div>
    `;

    pp.addtoleftpannel(text);

    pp.addtorightpannel(a5_btn, 3);

    dd1 =  <HTMLSelectElement> document.getElementById('a5-dd1');
    dd2 =  <HTMLSelectElement> document.getElementById('a5-dd2');
    dd3 =  <HTMLSelectElement> document.getElementById('a5-dd3');
    dd4 =  <HTMLSelectElement> document.getElementById('a5-dd4');

    populate_dds();
}

function populate_dds() {

    let op1 =  new Option(cp.toString(), cp.toString(), true);
    let op2 =  new Option(rho.toString(), rho.toString(), true);
    let op3 =  new Option(mue.toString(), mue.toString(), true);
    let op4 =  new Option(k.toString(), k.toString(), true);

    dd1.add(op1);
    dd2.add(op2);
    dd3.add(op3);
    dd4.add(op4);
}

//activity5();
