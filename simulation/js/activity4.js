// var obs_table = `<table class="table" style="height: 100%">
// <thead>
//   <tr>
//     <th scope="col">Obs No.</th>
//     <th scope="col">Flow rate, Q (L/h)</th>
//     <th scope="col">T<sub>i</sub> &#8451;</th>
//     <th scope="col">T<sub>0</sub> &#8451;</th>
//     <th scope="col">t<sub>i</sub> &#8451;</th>
//     <th scope="col">t<sub>o</sub> &#8451;</th>
//   </tr>
// </thead>
// <tbody id="table-1-body">
// </tbody>
// </table>
// `;
// var act4_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
// position: absolute; bottom: 12vh; width: 85%;">Properties Table</button>`
// function activity4() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     // pp.addtoleftpannel(button);
//     // pp.addtoleftpannel(button);
//     // pp.addtoleftpannel(button);
//     pp.addoffcanvas(3);
//     pp.showtitle("Observation Table", 3);
//     // document.getElementById('hide_panel3').click();
//     pp.showscore(200, 3);
//     pp.addtoleftpannel(obs_table);
//     complete_tab1();
//     pp.addtorightpannel(act4_btn, 3);
// }
// function complete_tab1() {
//     let table_body = document.getElementById('table-1-body');
//     for(let i=0; i<table_1.length; i++) {
//         let row = document.createElement('tr');
//         let val1 = std_deviation(table_1[i][0]);
//         table_1[i][0] = val1;
//         let val2 = std_deviation(table_1[i][1]);
//         table_1[i][1] = val2;
//         let val3 = std_deviation(table_1[i][2]);
//         table_1[i][2] = val3;
//         let val4 = std_deviation(table_1[i][3]);
//         table_1[i][3] = val4;
//         let val5 = std_deviation(table_1[i][4]);
//         table_1[i][4] = val5;
//         if(i == 0) {
//         val1 = table_1[i][0];
//          val2 = table_1[i][1];
//          val3 = table_1[i][2];
//          val4 = table_1[i][3];
//          val5 = table_1[i][4];
//         }
//         row.innerHTML = `
//         <td>${i+1}</td>
//         <td>${val1.toFixed(1)}</td>
//         <td>${val2.toFixed(1)}</td>
//         <td>${val3.toFixed(1)}</td>
//         <td>${val4.toFixed(1)}</td>
//         <td>${val5.toFixed(1)}</td>
//         `;
//         table_body.append(row);
//     }
// }
// // <tr>
// //     <th scope="row">1</th>
// //     <td>${700}</td>
// //     <td>${72}</td>
// //     <td>${67.2}</td>
// //     <td>${31.3}</td>
// //     <td>${36.6}</td>
// //   </tr>
// //   <tr>
// //     <th scope="row">2</th>
// //     <td>${std_deviation(580)}</td>
// //     <td>${std_deviation(72)}</td>
// //     <td>${std_deviation(66.3)}</td>
// //     <td>${std_deviation(31.2)}</td>
// //     <td>${std_deviation(36.5)}</td>
// //   </tr>
// //   <tr>
// //     <th scope="row">3</th>
// //     <td>${std_deviation(440)}</td>
// //     <td>${std_deviation(72)}</td>
// //     <td>${std_deviation(65.1)}</td>
// //     <td>${std_deviation(31.2)}</td>
// //     <td>${std_deviation(36.1)}</td>
// //   </tr>
// //   <tr>
// //     <th scope="row">4</th>
// //     <td>${std_deviation(340)}</td>
// //     <td>${std_deviation(72)}</td>
// //     <td>${std_deviation(63.8)}</td>
// //     <td>${std_deviation(31.2)}</td>
// //     <td>${std_deviation(35.8)}</td>
// //   </tr>
// //   <tr>
// //     <th scope="row">5</th>
// //     <td>${std_deviation(260)}</td>
// //     <td>${std_deviation(72)}</td>
// //     <td>${std_deviation(62.4)}</td>
// //     <td>${std_deviation(31.1)}</td>
// //     <td>${std_deviation(35.8)}</td>
// //   </tr>
// //   <tr>
// //   <th scope="row">6</th>
// //   <td>${std_deviation(180)}</td>
// //   <td>${std_deviation(72)}</td>
// //   <td>${std_deviation(60)}</td>
// //   <td>${std_deviation(31.0)}</td>
// //   <td>${std_deviation(35.0)}</td>
// // </tr>
//# sourceMappingURL=activity4.js.map