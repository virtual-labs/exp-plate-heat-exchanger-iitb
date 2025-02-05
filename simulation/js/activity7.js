let data1 = [];
let data2 = [];
let first_table_verified = false;
let second_table_verifed = false;
let btn_to_act8 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity8();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
function activity7() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addoffcanvas(4);
    pp.showtitle(`<p id='exp-title'>Calculate first row for both tables</p>`, 3);
    pp.showtitle(`<p id='exp-title'>Formulae for calculation</p>`, 4);
    pp.showdescription(`

        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ t_{avg} = \\frac{t_1 + t_2}{2} $$ </p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ S (cm) = b * w $$ </p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ HTA (sq cm) = \\frac{length}{100} * \\frac{w}{100} * Number of chan $$ </p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ v_i (cc/s) = \\frac{V}{t_i} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'> $$ m_i (kg/hr) = \\frac{v_i * \\frac{3600}{1000} * \\rho (gm/cc)}{Chan Hot} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ u_i (cm/s) = \\frac{v_i}{S * chan hot} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ LMTD_i (C) = \\frac{(T1_i - t_{avg}) - (T2_i - t_{avg})}{\\log_{e}(\\frac{T1_i - t_{avg}}{T2_i - t_{avg}})} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ Q (kcal/hr) = m_i * cp(kcal/kg C) * (T1_i - T2_i) * Chan. hot $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'> $$ Ui_i (Kcal/hr ,2 C) = \\frac{Q_i}{HTA * LMTD_i} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ Re_i = \\frac{De(cm) * u_i * \\rho (gm/cc)}{\\mu (cp) * 10^{-2}} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'> $$ Pr_i = \\frac{cp(kcal/kg C) * \\mu(kg/m S) * 3600}{k(kcal/hr m C)} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$\\frac{1}{ho_i} = \\frac{1}{5000}$$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$\\frac{1}{hi_i} = \\frac{1}{Ui_i} - \\frac{1}{ho_i} $$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'>$$ h_{exp} = hi_i$$</p>
        <p style='text-align: left !important; font-weight: 500; font-size: 1.5vw;'> $$ hi_{theo} = c_{val} * (Re_i)^{0.52} * (Pr_i)^{b_{val}} $$</p>

        
    </div>
    `, 4);
    // pp.addtoleftpannel(`<button class='btn btn-primary' onclick='show_offcanvas4();' style='width: 35%; margin: 1%; margin-left: 30%; position: relative; top: 1vw;'>Show Formulae</button>`);
    pp.showdescription(`
    <div style='text-align: center;'>
        <p>$$ t1 =  ${phe_table['t1']} C $$ and $$ t2 = ${phe_table['t2']}  C $$ </p>
        <p>$$ \\rho (gm/cc) =  ${rho} $$ and $$ \\rho (kg/cu-m) = ${rho_kg}$$ </p>
        <p>$$ cp (J/gm-k) = ${cp} $$  and $$ cp (kcal/kg-C) =  ${cp_kcal} $$ </p>
        <p>$$ k (w/m-k) = ${k} $$  and $$ k (kcal/hr-m-C) = ${k_kcal} $$  </p>
        <p>$$ \\mu (cp) = ${mue}$$  and $$ \\mu (kg/m-s) =  ${mue_kg} $$ </p>
        <p>$$ b = ${b} cm $$</p>
        <p>$$ w =  ${w} cm  $$</p>
        <p>$$ Chan hot = ${chan_hot} $$ </p>
        <p>$$ Chan cold = ${chan_cold} $$ </p>
        <p>$$ Length = ${len_tube} cm $$ </p>
        <p>$$ No of Chan = ${no_of_chan} $$ </p>
        <p>$$ t_{avg} =  ${t_avg} deg C $$</p>
        <p>$$ V = ${V} cu. cm $$ </p>
        <p>$$ De(m) = ${De} $$  and $$De(cm) = ${100 * De} $$ </p>
        <p>$$ c_{val} = ${c_val} $$  </p>
        <p>$$ b_{val} = ${b_val} $$  </p>
    </div>
    `, 3);
    let hide_btn = document.getElementsByClassName('offcanvasbtn')[1];
    hide_btn.style.position = 'relative';
    hide_btn.style.left = '94vw';
    hide_btn.style.top = '20px';
    hide_btn.innerHTML = `<i class="bi bi-clipboard" style="font-size: calc(1vw + 12px);"></i>`;
    hide_btn.onclick = show_offcanvas4;
    load_main_table();
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_main_table() {
    let heading_1 = ['S No.', "T (s)", 'T1 (C)', 'T2 (C)', 'v (cc/s)', "m (kg/hr)", 'u (cm/s)', 'LMTD (C)', 'Q (kcal/hr)', 'Ui (kcal/hr m2 C)', 'log(Ui)', 'log(m)', 'Check'];
    let heading_2 = [`S No.`, `T (s)`, `m<sup>0.256</sup>`, `1/m<sup>0.256</sup>`, `Re`, `Pr`, `1/Ui`, `1/ho`, `1/hi`, `hi_exp`, `hi_theo`, 'Check'];
    data1[0] = [];
    data2[0] = [];
    //load data for first table
    data1[0].push('1');
    data1[0].push(phe_table['t'][0].toFixed(3));
    data1[0].push(phe_table['T1'][0].toFixed(3));
    data1[0].push(phe_table['T2'][0].toFixed(3));
    data1[0].push(`<input type='text' class='form-control' id='v-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='m-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='u-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='lmtd-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='q-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='ui-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='lnui-inp' style='width: 100%' />`);
    data1[0].push(`<input type='text' class='form-control' id='lnm-inp' style='width: 100%' />`);
    data1[0].push(`<input type='button' class='btn btn-primary' id='verify-1-btn' style='width: 100%' onclick='verify1();' value='Verify' />`);
    //load data for second table
    data2[0].push('1');
    data2[0].push(phe_table['t'][0]);
    data2[0].push(`<input type='text' class='form-control' id='m256-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='m-256-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='re-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='pr-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='ui-1-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='ho-1-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='hi-1-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='hi_exp-inp' style='width: 100%' />`);
    data2[0].push(`<input type='text' class='form-control' id='hi_theo-inp' style='width: 100%' />`);
    data2[0].push(`<input type='button' class='btn btn-primary' id='verify-2-btn' style='width: 100%' onclick='verify2();' value='Verify' />`);
    let tables = new Double_Table(heading_1, data1, heading_2, data2);
    pp.addtoleftpannel(tables.template);
    tables.draw();
}
function load_main_table_data() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id='exp-title'>Calculate first row for both tables</p>`, 3);
    let heading_1 = ['S No.', "T (s)", 'T1 (C)', 'T2 (C)', 'v (cc/s)', "m (kg/hr)", 'u, (cm/s)', 'LMTD (C)', 'Q kcal/hr', 'Ui, kcal/hr m2 C', 'log(Ui)', 'log(m)'];
    let heading_2 = [`S No.`, `T (s)`, `m<sup>0.256</sup>`, `1/m<sup>0.256</sup>`, `Re`, `Pr`, `1/Ui`, `1/ho`, `1/hi`, `hi_exp`, `hi_theo`];
    for (let i = 0; i < phe_table['t'].length; i++) {
        data1[i] = [];
        data2[i] = [];
        //load data for first table
        data1[i].push(i + 1);
        data1[i].push(phe_table['t'][i]);
        data1[i].push(phe_table['T1'][i]);
        data1[i].push(phe_table['T2'][i]);
        data1[i].push(phe_table['v'][i].toFixed(4));
        data1[i].push(phe_table['m'][i].toFixed(4));
        data1[i].push(phe_table['u'][i].toFixed(4));
        data1[i].push(phe_table['lmtd'][i].toFixed(4));
        data1[i].push(phe_table['q'][i].toFixed(4));
        data1[i].push(phe_table['ui'][i].toFixed(4));
        data1[i].push(phe_table['lnui'][i].toFixed(4));
        data1[i].push(phe_table['lnm'][i].toFixed(4));
        //load data for second table
        data2[i].push(i + 1);
        data2[i].push(phe_table['t'][i].toFixed(3));
        data2[i].push(phe_table['m256'][i].toFixed(4));
        data2[i].push(phe_table['m-256'][i].toFixed(4));
        data2[i].push(phe_table['re'][i].toFixed(4));
        data2[i].push(phe_table['pr'][i].toFixed(4));
        data2[i].push(phe_table['ui-1'][i].toFixed(4));
        data2[i].push(phe_table['ho-1'][i].toFixed(4));
        data2[i].push(phe_table['hi-1'][i].toFixed(4));
        data2[i].push(phe_table['hi_exp'][i].toFixed(4));
        data2[i].push(phe_table['hi_theo'][i].toFixed(4));
    }
    let tables = new Double_Table(heading_1, data1, heading_2, data2);
    pp.addtoleftpannel(tables.template);
    tables.draw();
    pp.addtorightpannel(btn_to_act8, 3);
}
function verify1() {
    console.log('first table values');
    console.log(phe_table['v'][0]);
    console.log(phe_table['m'][0]);
    console.log(phe_table['u'][0]);
    console.log(phe_table['lmtd'][0]);
    console.log(phe_table['q'][0]);
    console.log(phe_table['ui'][0]);
    console.log(phe_table['lnui'][0]);
    console.log(phe_table['lnm'][0]);
    let val1 = document.getElementById("v-inp");
    let val2 = document.getElementById("m-inp");
    let val3 = document.getElementById("u-inp");
    let val4 = document.getElementById("lmtd-inp");
    let val5 = document.getElementById("q-inp");
    let val6 = document.getElementById("ui-inp");
    let val7 = document.getElementById("lnui-inp");
    let val8 = document.getElementById("lnm-inp");
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), phe_table['v'][0])) {
        alert("please correct the V value");
        return;
    }
    if (!verify_values(parseFloat(val2.value), phe_table['m'][0])) {
        alert("please correct the m value");
        return;
    }
    if (!verify_values(parseFloat(val3.value), phe_table['u'][0])) {
        alert("please correct the u value");
        return;
    }
    if (!verify_values(parseFloat(val4.value), phe_table['lmtd'][0])) {
        alert("please correct the LMTD value");
        return;
    }
    if (!verify_values(parseFloat(val5.value), phe_table['q'][0])) {
        alert("please correct the Q value");
        return;
    }
    if (!verify_values(parseFloat(val6.value), phe_table['ui'][0])) {
        alert("please correct the LMTD value");
        return;
    }
    if (!verify_values(parseFloat(val7.value), phe_table['lnui'][0])) {
        alert("please correct the ln(Ui) value");
        return;
    }
    if (!verify_values(parseFloat(val8.value), phe_table['lnm'][0])) {
        alert("please correct the ln(m) value");
        return;
    }
    first_table_verified = true;
    alert("Your Calculations are correct");
    let btn = document.getElementById('verify-1-btn');
    btn.disabled = true;
    val1.disabled = true;
    val2.disabled = true;
    val3.disabled = true;
    val4.disabled = true;
    val5.disabled = true;
    val6.disabled = true;
    val7.disabled = true;
    val8.disabled = true;
    if (first_table_verified && second_table_verifed) {
        load_main_table_data();
    }
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function verify2() {
    console.log('second table values');
    console.log(phe_table['m256'][0]);
    console.log(phe_table['m-256'][0]);
    console.log(phe_table['re'][0]);
    console.log(phe_table['pr'][0]);
    console.log(phe_table['ui-1'][0]);
    console.log(phe_table['ho-1'][0]);
    console.log(phe_table['hi-1'][0]);
    console.log(phe_table['hi_exp'][0]);
    console.log(phe_table['hi_theo'][0]);
    let val1 = document.getElementById("m256-inp");
    let val2 = document.getElementById("m-256-inp");
    let val3 = document.getElementById("re-inp");
    let val4 = document.getElementById("pr-inp");
    let val5 = document.getElementById("ui-1-inp");
    let val6 = document.getElementById("ho-1-inp");
    let val7 = document.getElementById("hi-1-inp");
    let val8 = document.getElementById("hi_exp-inp");
    let val9 = document.getElementById("hi_theo-inp");
    console.log(parseFloat(val1.value));
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), phe_table['m256'][0])) {
        alert("please correct the m^0.256 value");
        return;
    }
    if (!verify_values(parseFloat(val2.value), phe_table['m-256'][0])) {
        alert("please correct the m^(0.256) value");
        return;
    }
    if (!verify_values(parseFloat(val3.value), phe_table['re'][0])) {
        alert("please correct the Re value");
        return;
    }
    if (!verify_values(parseFloat(val4.value), phe_table['pr'][0])) {
        alert("please correct the Pr value");
        return;
    }
    if (!verify_values(parseFloat(val5.value), phe_table['ui-1'][0])) {
        alert("please correct the Ui^(-1) value");
        return;
    }
    if (!verify_values(parseFloat(val6.value), phe_table['ho-1'][0])) {
        alert("please correct the ho^(-1) value");
        return;
    }
    if (!verify_values(parseFloat(val7.value), phe_table['hi-1'][0])) {
        alert("please correct the hi^(-1) value");
        return;
    }
    if (!verify_values(parseFloat(val8.value), phe_table['hi_exp'][0])) {
        alert("please correct the hi_exp value");
        return;
    }
    if (!verify_values(parseFloat(val9.value), phe_table['hi_theo'][0])) {
        alert("please correct the hi_theo value");
        return;
    }
    second_table_verifed = true;
    alert("Your Calculations are correct");
    let btn = document.getElementById('verify-2-btn');
    btn.disabled = true;
    val1.disabled = true;
    val2.disabled = true;
    val3.disabled = true;
    val4.disabled = true;
    val5.disabled = true;
    val6.disabled = true;
    val7.disabled = true;
    val8.disabled = true;
    if (first_table_verified && second_table_verifed) {
        load_main_table_data();
    }
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function show_offcanvas4() {
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight4"));
    bsOffcanvas.show();
}
//activity7();
//# sourceMappingURL=activity7.js.map