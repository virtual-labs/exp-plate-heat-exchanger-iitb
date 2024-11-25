


function activity9() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);

    data_1 = [];
    data = [];
    label = [];
    pol = [];


    draw_char_1();

    pp.showtitle(`<p id='exp-title'  style='padding: 1% 5vw;'> $$ \\frac{1}{Ui} \\hspace{3mm} vs \\hspace{3mm} \\frac{1}{m^{0.256}} $$ </p>`, 3);

    MathJax.typeset();

}



function draw_char_1() {

    document.getElementById('hide_panel3').click();

    pp.clearleftpannel();
    pp.addcanvas('myChart');

   

    pp.showtitle(``, 3)

    if(document.getElementById('panel1_btn')) {
        document.getElementById("panel1_btn").remove();
    }


  
    for(let i=0; i<data1.length; i++) {
        data.push(parseFloat(data2[i][6]));  // y-axis
        label.push(parseFloat(data2[i][3]));  // x-axis
    }

    calculate_y_datapoints_1();
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if(typeof chart!='undefined')
    {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
        labels: label,
        datasets: [
        {
            label: 'Experiment',
            data: data,
            fill: false,
            borderColor: 'blue',
            tension: 0.5,
            showLine: false,
            // yAxisID: 'A',
            // borderWidth: 1,
            // borderColor: "green",
            // backgroundColor: "rgba(34, 139, 34, 0.5)",
        },
        {
            label: 'Linear Regression',
            data: data_1,
            fill: false,
            borderColor: 'red',
            tension: 0.5,
            showLine: true
            // yAxisID: 'A',
            // borderWidth: 1,
            // borderColor: "red",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
        
        
        ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
              y: {
                title: {
                    display: true,
                    text: '1/Ui',
                    font:{size:14,weight:'bold'}
                  }
              },
              x: {
                title: {
                    display: true,
                    text: '1/m^(0.256)',
                    font:{size:14,weight:'bold'}
                  }
              }
            
            },
            plugins: {
                title: {
                  display: true,
                  text: `1/Ui vs 1/m^(0.256)`,
                  font: {size: 18},
                },
                legend:{labels:{font:{size:14,weight:'bold'}}}
            },
                   
        }
    });
  }

  function calculate_y_datapoints_1() {
    pol = regression_linear(label, data);
    console.log(pol);
    for(let i=0; i<label.length; i++) {
      data_1.push((label[i]*pol[0]) + pol[1]);
    }
    
  }


