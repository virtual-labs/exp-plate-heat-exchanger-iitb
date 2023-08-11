//activity5_data  = [dimensions of heat exchanger, areas and volume,  [uc, pr, Rec, Nuc, ho, hoi]]
var temp_reading = [79.9];
var readings = [
    {
        temp: 81.2,
        reading: [
            [199.60, 81.2, 72.2, 28.2, 28.3],
            [102.40, 81.9, 76.2, 28.2, 28.3],
            [74.40, 81.9, 77.4, 28.2, 28.3],
            [51.94, 81.8, 78.5, 28.2, 28.3],
            [37.32, 82.2, 79.7, 28.2, 28.3],
            [25.72, 81.8, 80.0, 28.2, 28.3],
            [18.69, 81.9, 80.8, 28.2, 28.3],
            [15.37, 81.9, 80.8, 28.2, 28.3]
        ]
    },
    {
        temp: 83.2,
        reading: [
            [190.1, 83.2, 66.5, 28.2, 30],
            [100.2, 82.9, 72.1, 28.2, 30],
            [76.32, 83.3, 73.7, 28.2, 30],
            [51.23, 82.8, 75.9, 28.2, 30],
            [34.23, 83.4, 77.5, 28.2, 30],
            [23.92, 83.1, 78.7, 28.2, 30],
            [14.12, 82.9, 79.9, 28.2, 30],
            [7.18, 82.8, 80.8, 28.2, 30]
        ]
    }
];
// new code
let rho = 0.835; // gm/cc
let rho_kg = 835; // kg/cu.m
let cp = 2.62; // j/gm-k
let cp_kcal = 0.62618; // kcal/kg C
let k = 0.132; // w/m-k
let k_kcal = 0.113388; // kcal/hr m C
let mue = 3.461; // cp
let mue_kg = 0.003461; // kg/m S
let b = 0.09; // cm
let w = 4.4; // cm
let chan_hot = 3;
let chan_cold = 4;
let len_tube = 12.8; // cm
let no_of_chan = 6;
let V = 1140; // cu.cm
let S = b * w; // sq.cm
let HTA = (len_tube / 100) * (w / 100) * no_of_chan; // sq.m
let De = (2 * (b / 100) * (w / 100)) / ((b / 100) + (w / 100)); // m
let ho = 5000;
let c_val = 3.0481296116202;
let b_val = 0.571008062840195;
//24.9 = t1
// 25.1 = t2
let phe_table = {
    t: [13.82, 14.94, 16.39, 19.17, 24.70, 29.08, 38.45, 44.88],
    T1: [79.9, 82.5, 80, 79.4, 80.5, 79.5, 79.1, 79.5],
    T2: [72.3, 74, 71.2, 69.6, 68.9, 67.2, 64.5, 62.4]
};
console.log("before std dev");
console.log(phe_table);
function add_std_deviation() {
    for (let i = 0; i < phe_table['t'].length; i++) {
        phe_table['t'][i] = std_deviation(phe_table['t'][i]);
        phe_table['T1'][i] = std_deviation(phe_table['T1'][i]);
        phe_table['T2'][i] = std_deviation(phe_table['T2'][i]);
    }
}
add_std_deviation();
console.log("after std dev");
console.log(phe_table);
phe_table['t1'] = 24.9;
phe_table['t2'] = 25.1;
let t_avg = (phe_table['t1'] + phe_table['t2']) / 2; // degree celcius
console.log(t_avg, HTA, S);
function calculate_table() {
    phe_table['v'] = [];
    phe_table['m'] = [];
    phe_table['u'] = [];
    phe_table['lmtd'] = [];
    phe_table['q'] = [];
    phe_table['ui'] = [];
    phe_table['lnui'] = [];
    phe_table['lnm'] = [];
    phe_table['m256'] = [];
    phe_table['m-256'] = [];
    phe_table['re'] = [];
    phe_table['pr'] = [];
    phe_table['ui-1'] = [];
    phe_table['ho-1'] = [];
    phe_table['hi-1'] = [];
    phe_table['hi_exp'] = [];
    phe_table['hi_theo'] = [];
    for (let i = 0; i < phe_table.t.length; i++) {
        phe_table['v'].push(V / phe_table.t[i]); // cc/s
        phe_table['m'].push((phe_table['v'][i] * 3.6 * rho) / chan_hot); // kg/hr
        phe_table['u'].push(phe_table['v'][i] / (S * chan_hot)); // cm/s
        phe_table['lmtd'].push(((phe_table.T1[i] - t_avg) - (phe_table.T2[i] - t_avg)) / (Math.log((phe_table.T1[i] - t_avg) / (phe_table.T2[i] - t_avg)))); // c
        phe_table['q'].push(phe_table['m'][i] * cp_kcal * (phe_table.T1[i] - phe_table.T2[i]) * chan_hot); // kcal/hr
        phe_table['ui'].push(phe_table['q'][i] / (HTA * phe_table['lmtd'][i]));
        phe_table['lnui'].push(Math.log10(phe_table['ui'][i]));
        phe_table['lnm'].push(Math.log10(phe_table['m'][i]));
        phe_table['m256'].push(Math.pow(phe_table['m'][i], (0.256)));
        phe_table['m-256'].push(1 / phe_table['m256'][i]);
        phe_table['re'].push((De * 100 * phe_table['u'][i] * rho) / (mue / 100));
        phe_table['pr'].push(cp_kcal * mue_kg * 3600 / k_kcal);
        phe_table['ui-1'].push(1 / phe_table['ui'][i]);
        phe_table['ho-1'].push(1 / ho);
        phe_table['hi-1'].push(phe_table['ui-1'][i] - phe_table['ho-1'][i]);
        phe_table['hi_exp'].push(1 / phe_table['hi-1'][i]);
        phe_table['hi_theo'].push(c_val * (Math.pow(phe_table['re'][i], 0.52)) * (Math.pow(phe_table['pr'][i], b_val)));
    }
    console.log(phe_table);
}
calculate_table();
//# sourceMappingURL=data.js.map