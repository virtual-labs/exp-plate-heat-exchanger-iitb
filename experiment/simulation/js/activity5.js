// declare var Chart;
// var act5_ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_main_table();" style="
// position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// var act5_plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style="
// position: absolute; bottom: 8vh; width: 85%;">Plot Values</button>`;
// var act5_table = `   
//  <div style="text-align: center; padding: 2% 0; font-size: 4vw;">
// Physical Properties at Mean Temperature
// </div>
// <div>
// <table class="table">
//     <thead>
//       <tr>
//         <th style="padding: 2% 2% !important; font-size: 2.5vw;" scope="col">Properties</th>
//         <th style="padding: 2% 2% !important; font-size: 2.5vw;" scope="col">values</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Heat Capacity C<sub>p</sub> (J/kg-K)</td>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;">4180</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Density, &rho; (kg/m<sup>3</sup>)</td>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;">100</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Viscosity, &nu; (kg/m-s)</td>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">0.00047</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Thermal Conductivity, K (W/m-k)</td>
//         <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">0.616</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// `;
// var ob_btn_5 = `<button id="panel1_btn" class="btn btn-primary" onclick="table_calculations();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
// function activity5() {
//   pp.clearleftpannel();
//   pp.clearrightpannel();
//   pp.addoffcanvas(3);
//   pp.showdescription(
//     '<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Now, Click on next</p>',
//     3
//   );
//   pp.addtorightpannel(ob_btn_5, 3);
//   pp.showscore("300", 3);
//   pp.showtitle("Physical Properties at Mean Temperature", 3);
//   // document.getElementById('hide_panel1').click();
//   pp.addtoleftpannel(act5_table);
//   // var bsOffcanvas = new bootstrap.Offcanvas(
//   //     document.getElementById("offcanvasRight3")
//   //   );
//   //   bsOffcanvas.show();
// }
// var all_propeties = `
// <div style="overflow-y: auto !important; max-height: 85%;">
// <table class="table" style="height: 30% !important;">
//     <thead>
//       <tr>
//         <th style="padding: 2% 2% !important; font-size: 12px;" scope="col">Properties</th>
//         <th style="padding: 2% 2% !important; font-size: 12px;" scope="col">values</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Heat Capacity C<sub>p</sub> (J/kg-K)</td>
//         <td style="padding: 2% 2% !important; font-size: 12px">4180</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Density, &rho; (kg/m<sup>3</sup>)</td>
//         <td style="padding: 2% 2% !important; font-size: 12px">100</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Viscosity, &nu; (kg/m-s)</td>
//         <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">0.00047</td>
//       </tr>
//       <tr>
//         <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Thermal Conductivity, K (W/m-k)</td>
//         <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">0.616</td>
//       </tr>
//       <tr>
//       <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Heat Transfer Arrea of heat exchanger, A(m<sup>2<sup>)</td>
//       <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">219</td>
//     </tr>
//     <tr>
//     <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Cross-Sectional area of inner tube, S (m<sup>2</sup>)</td>
//     <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">3849</td>
//     <tr>
//     <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Note: Re is Reynolds Number</td>
//   </tr>
//     </tbody>
//   </table>
//   <div style="margin: 1% 3%; font-size: 12px">
//   <p style="margin-up: 2%; margin-bottom: 0;">V = q/(1000 * 3600)</p>
//   <p style="margin-up: 2%; margin-bottom: 0;">u = V / S</p>
//   <p style="margin-up: 2%; margin-bottom: 0;">m = V x &rho;</p>
//   <p style="margin-up: 2%; margin-bottom: 0;">Q = m x C<sub>p</sub> x (T<sub>i</sub> - T<sub>o</sub>)</p>
//   <p style="margin-up: 2%; margin-bottom: 0;"><img style="width: 55%" src="./images/lmtd.png" alt=""></p>
//   <p style="margin-up: 2%; margin-bottom: 0;">U = Q/(A x LMTD)</p>
//   <p style="margin-up: 2%; margin-bottom: 0;">Re = (u x &rho; x d<sub>1</sub>) / &mu; </p>
// </div>
// </div>
// `;
// var all_properties_without_table = `
// <div id="left-props" class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Heat Capacity C<sub>p</sub> (J/kg-K)</div>
//     <div class="col-2">4180</div>
//     <div class="col-4">Density, &rho; (kg/m<sup>3</sup>)</div>
//     <div class="col-2">100</div>
// </div>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Viscosity, &nu; (kg/m-s)</div>
//     <div class="col-2">0.00047</div>
//     <div class="col-4">Thermal Conductivity, K (W/m-k)</div>
//     <div class="col-2">0.616</div>
// </div>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Heat Transfer Arrea of heat exchanger, A(m<sup>2<sup>)</div>
//     <div class="col-2">219</div>
//     <div class="col-4">Cross-Sectional area of inner tube, S (m<sup>2</sup>)</div>
//     <div class="col-2">3849</div>
// </div>
// <br>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
// <div class="col-3">V = q/(1000 * 3600)</div>
// <div class="col-3">u = V / S</div>
// <div class="col-3">m = V x &rho;</div>
// <div class="col-3">Q = m x C<sub>p</sub> x (T<sub>i</sub> - T<sub>o</sub>)</div>
// </div>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
// <div class="col-3"><img style="width: 100%" src="./images/lmtd.png" alt=""></div>
// <div class="col-3">U = Q/(A x LMTD)</div>
// </div>
// `;
// var main_table = `
// <div class="table-responsive">
// <table class="table" style="height: 80vh !important;">
//     <thead>
//       <tr>
//         <th scope="col">Sr No.</th>
//         <th scope="col">q (L/h)</th>
//         <th scope="col">T<sub>i</sub></th>
//         <th scope="col">T<sub>0</sub></th>
//         <th scope="col">t<sub>i</sub></th>
//         <th scope="col">t<sub>o</sub></th>
//         <th scope="col">V m<sup>3</sup>/s x 10<sup>-4</sup></th>
//         <th scope="col">u m/s</th>
//         <th scope="col">m (kg/s) x 10<sup>-3</sup></th>
//         <th scope="col">Re</th>
//         <th scope="col">Q (W)</th>
//         <th scope="col">LMTD (K)</th>
//         <th scope="col">U (W/m<sup>2</sup>-K)</th>
//         <th scope="col">1/U x 10<sup>-4</sup></th>
//         <th scope="col">1/u<sup>0.8</sup> x 10<sup>-3</sup></th>
//         <th id="a5-temp" scope="col">Check</th>
//       </tr>
//     </thead>
//     <tbody id="table-5-body">
//       <tr>
//           <td>1</td>
//           <td>700</td>
//           <td>72</td>
//           <td>67.2</td>
//           <td>31.3</td>
//           <td>36.6</td>
//           <td><input id="mt-1" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-2" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-3" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-31" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-4" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-5" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-6" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-7" type="text" class="form-control" name="" id=""></td>
//           <td><input id="mt-8" type="text" class="form-control" name="" id=""></td>
//           <td><input class="btn btn-primary" onclick="act5_verify_obtable();" value="verify" style="width: 100%" type="button"></td>
//       </tr>
//     </tbody>
//     </table>
//     </div>
// `;
// function table_calculations() {
//   pp.clearleftpannel();
//   pp.clearrightpannel();
//   pp.addoffcanvas(3);
//   pp.showtitle('Calculate LMTD and U</p>', 3);
//   pp.addtorightpannel(all_propeties, 3);
//   pp.addtoleftpannel(main_table);
// //   pp.addtoleftpannel(all_properties_without_table);
// }
// function act5_verify_obtable() {
//     let val1: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-1");
//     let val2: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-2");
//     let val3: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-3");
//     let val31: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-31");
//     let val4: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-4");
//     let val5: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-5");
//     let val6: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-6");
//     let val7: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-7");
//     let val8: HTMLInputElement = <HTMLInputElement>document.getElementById("mt-8");
//     console.log(parseFloat(val1.value));
//     // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
//     if (!verify_values(parseFloat(val1.value), 1.9)) {
//       alert("please correct the V value");
//       return;
//     }
//     if (!verify_values(parseFloat(val2.value), 5.053)) {
//       alert("please correct the u value");
//       return;
//     }
//     if (!verify_values(parseFloat(val3.value), 191)) {
//       alert("please correct the m value");
//       return;
//     }
//     if (!verify_values(parseFloat(val31.value), 72847)) {
//       alert("please correct the Nre value");
//       return;
//     }
//     if (!verify_values(parseFloat(val4.value), 3823.3)) {
//       alert("please correct the Q value");
//       return;
//     }
//     if (!verify_values(parseFloat(val5.value), 35.65)) {
//       alert("please correct the LMTD value");
//       return;
//     }
//     if (!verify_values(parseFloat(val6.value), 4876.84)) {
//         alert("please correct the U value");
//         return;
//       }
//       if (!verify_values(parseFloat(val7.value), 2.051)) {
//         alert("please correct the 1/U value");
//         return;
//       }
//       if (!verify_values(parseFloat(val8.value), 274)) {
//         alert("please correct the 1/u^(0.8) value");
//         return;
//       }
//     pp.addtorightpannel(act5_ob_btn, 3);
//     var bsOffcanvas = new bootstrap.Offcanvas(
//       document.getElementById("offcanvasRight3")
//     );
//     bsOffcanvas.show();
//   }
//   function complete_main_table() {
//     document.getElementById('hide_panel3').click();
//     pp.clearleftpannel();
//     pp.addtoleftpannel(main_table);
//     let tb = document.getElementById('table-5-body');
//     tb.innerHTML= ``;
//     document.getElementById('a5-temp').remove();
//     for(let i=0; i<6; i++) {
//         let row = document.createElement('tr');
//         main_table_data[i] = [];
//         main_table_data[i][0] = i;
//         main_table_data[i][1] = table_1[i][0];
//         main_table_data[i][2] = table_1[i][1];
//         main_table_data[i][3] = table_1[i][2];
//         main_table_data[i][4] = table_1[i][3];
//         main_table_data[i][5] = table_1[i][4];
//         main_table_data[i][6] = table_1[i][0]/(1000 * 3600);
//         main_table_data[i][7] = main_table_data[i][6]*10000/0.3849;
//         main_table_data[i][8] = main_table_data[i][6] * 980;
//         main_table_data[i][9] = main_table_data[i][8] * 4180 * (main_table_data[i][2] -  main_table_data[i][3]);
//         main_table_data[i][10] = (main_table_data[i][2] -  main_table_data[i][3] +  main_table_data[i][4] - main_table_data[i][5]);
//         main_table_data[i][10] = main_table_data[i][10]/Math.log((main_table_data[i][2] - main_table_data[i][5])/(main_table_data[i][3] - main_table_data[i][4]));
//         main_table_data[i][11] = main_table_data[i][9] * 10000 / (219.8 * main_table_data[i][10]);
//         main_table_data[i][12] = 1 / (main_table_data[i][11]); 
//         main_table_data[i][13] = 1 / (main_table_data[i][7]**(0.8));
//         main_table_data[i][14]= (main_table_data[i][7] * 980 * 0.007) / 0.0004758;
//         row.innerHTML = `
//         <td>${i+1}</td>
//         <td>${main_table_data[i][1].toFixed(1)}</td>
//         <td>${main_table_data[i][2].toFixed(1)}</td>
//         <td>${main_table_data[i][3].toFixed(1)}</td>
//         <td>${main_table_data[i][4].toFixed(1)}</td>
//         <td>${main_table_data[i][5].toFixed(1)}</td>
//         <td>${(main_table_data[i][6] * 10000).toFixed(2)}</td>
//         <td>${(main_table_data[i][7]).toFixed(2)}</td>
//         <td>${(main_table_data[i][8]*1000).toFixed(0)}</td>
//         <td>${main_table_data[i][14].toFixed(0)}</td>
//         <td>${main_table_data[i][9].toFixed(0)}</td>
//         <td>${main_table_data[i][10].toFixed(2)}</td>
//         <td>${main_table_data[i][11].toFixed(2)}</td>
//         <td>${(main_table_data[i][12]*10000).toFixed(2)}</td>
//         <td>${(main_table_data[i][13]*1000).toFixed(0)}</td>
//         `;
//         tb.append(row);
//     }
//     console.log(main_table_data);
//     document.getElementById('panel1_btn').remove();
//     pp.addtorightpannel(act5_plot_btn, 3);
//   }
//   var label = [];
//   var data = [];
//   var data1 = [];
//   var pol;
//   function calculate_y_datapoints() {
//     pol = regression_linear(label, data);
//     console.log(pol);
//     for(let i=0; i<label.length; i++) {
//       data1.push((label[i]*pol[0]) + pol[1]);
//     }
//   }
//   function draw_chart() {
//     document.getElementById('hide_panel3').click();
//     pp.clearleftpannel();
//     pp.addcanvas('myChart');
//     for(let i=0; i<main_table_data.length; i++) {
//         label.push(main_table_data[i][13]);
//         data.push(main_table_data[i][12]);
//     }
//     calculate_y_datapoints();
//     var ctx = document.getElementById('myChart');
//     ctx.style.backgroundColor = "white";
//     ctx.style.marginTop = "5px";
//     ctx.style.marginLeft = "10%";
//     ctx.style.padding = "10px";
//     ctx.style.borderRadius = "8px";
//     if(typeof chart!='undefined')
//     {
//         chart.destroy();
//     }
//     // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
//     // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
//     // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
//     var chart = new Chart(ctx, {
//         type: 'scatter',
//         data: {
//         labels: label,
//         datasets: [
//         {
//             label: 'Experimental',
//             data: data,
//             fill: false,
//             borderColor: 'blue',
//             tension: 0.5,
//             showLine: false,
//             // yAxisID: 'A',
//             // borderWidth: 1,
//             // borderColor: "green",
//             // backgroundColor: "rgba(34, 139, 34, 0.5)",
//         },
//         {
//             label: 'Best Fit',
//             data: data1,
//             fill: false,
//             borderColor: 'red',
//             tension: 0.5,
//             showLine: true
//             // yAxisID: 'A',
//             // borderWidth: 1,
//             // borderColor: "red",
//             // backgroundColor: "rgba(255, 0, 0, 0.5)",
//         },
//         ]
//         },
//         options: {
//             maintainAspectRatio: true,
//             scales: {
//               y: {
//                 title: {
//                     display: true,
//                     text: '1/U',
//                     font:{size:14,weight:'bold'}
//                   }
//               },
//               x: {
//                 title: {
//                     display: true,
//                     text: '1/u^(0.8)',
//                     font:{size:14,weight:'bold'}
//                   }
//               }
//             },
//             plugins: {
//                 title: {
//                   display: true,
//                   text: `1/U vs 1/u^(0.8) y intercept = ${pol[1].toFixed(4)}`,
//                   font: {size: 18},
//                 },
//                 legend:{labels:{font:{size:14,weight:'bold'}}}
//             },
//         }
//     });
//   }
//# sourceMappingURL=activity5.js.map