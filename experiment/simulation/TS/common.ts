var root: HTMLDivElement = <HTMLDivElement> document.getElementById('root');
var main: HTMLDivElement = <HTMLDivElement> document.getElementById("main");
var panel: HTMLDivElement = <HTMLDivElement> document.getElementById("panel");
var number_of_attempts: number = 0;

var selected_data_index: number = 0;



var main_table:number[][] = [
    [ 0.0000044, 0.115, 0.004, 86.56, 48.3, 81.48],
    [0.0000086, 0.223, 0.007, 106.86, 50.7, 95.75],
    [0.0000118, 0.307, 0.010, 116.11, 51.4, 102.79],
    [0.0000169, 0.440, 0.014, 121.97, 51.9, 106.90],
    [0.0000236, 0.613, 0.020, 128.59, 52.7, 110.98],
    [0.0000342, 0.889, 0.029, 134.35, 52.6, 116.05],
    [0.0000471, 1.223, 0.039, 143.80, 52.9, 123.50],
    [0.0000573, 1.488, 0.048, 137.39, 53.1, 117.66]
];  // calculate first table for activity 7




var last_table: number[][] = [
    [82.28, 167.40, 146.90],
    [96.86, 326.30, 183.50],
    [104.07, 449.11, 204.11],
    [108.28, 643.31, 230.09],
    [112.48, 895.32, 256.89],
    [117.68, 1299.12, 290.83],
    [125.35, 1787.77, 323.49],
    [119.34, 2173.94, 345.28]
]; // calculate last table for activity 7





var observation_data_index: number;
var selected_temp: number = 81.2;

var a7_second_calculation_set: number[] = [];

var prh: number;



//calculations

var heat_transfer_area: number = 0.022;
var area_of_inner_tube: number = 0.000038;
var equivalent_diameter: number = 0.008;
var annulus_area: number = 0.000176;


// physical properties


// var cph = 2612.5;
// var cpc = 4180;

// var rhoh = 835;
// var rhoc = 1000;

// var mueh = 0.004
// var muec = 0.00084;

// var kh = 0.117;
// var kc = 0.616;







function verify_values(value:number, truevalue:number):boolean {
    if((truevalue == 0) && (value == truevalue)) {
        return true
    }


    let calculated_value = Math.abs((truevalue - value)/truevalue*100);

    if(calculated_value <= 4) {
        return true
    } else {
        return false;
    }
}

function random(min: number, max: number): number {
    let num = (max - min)*Math.random()+min;
    return num;
}

function std_deviation(num: number) {
    let std  = num/100.0;

    let dev = num - random(-std, std);

    return dev;
}

function regression_linear(x:number[],y:number[]):number[]{
    let sumx=0;
    let sumy=0;
    let sumxy=0;
    let sumxx=0;
    let n=x.length;
    for(let i=0;i<n;i++){
        sumx+=x[i];
        sumy+=y[i];
        sumxy+=x[i]*y[i];
        sumxx+=x[i]*x[i];
    }
    let pol=[];
    pol[0]=(sumx*sumy-n*sumxy)/(sumx**2-n*sumxx);
    pol[1]=(sumy-pol[0]*sumx)/n;
    return(pol);
}

function create_labels(){

    all_labels = [];
    let text=new Chemistry.Geo_Text("Pump",new Chemistry.Point(1140,595),canvas);
    text.color="black";
    text.font="24% Arial";

    all_labels.push(text);

    let text2 =new Chemistry.Geo_Text("Plate Exchanger",new Chemistry.Point(1090,60),canvas);
    text2.color="black";
    text2.font="24% Arial";

    all_labels.push(text2);

    let text1=new Chemistry.Geo_Text("Horizontal Pipe",new Chemistry.Point(1550,725),canvas);
    text1.color="black";
    text1.font="24% Arial";

    all_labels.push(text1);

    let text3=new Chemistry.Geo_Text("Glass Section",new Chemistry.Point(1390,590),canvas);
    text3.color="black";
    text3.font="24% Arial";

    all_labels.push(text3);

    let text5=new Chemistry.Geo_Text("Vertical Pipe",new Chemistry.Point(1350,50),canvas);
    text5.color="black";
    text5.font="24% Arial";

    all_labels.push(text5);

    let text4=new Chemistry.Geo_Text("Heater",new Chemistry.Point(1710,440),canvas);
    text4.color="black";
    text4.font="24% Arial";

    all_labels.push(text4);

    
    let text6=new Chemistry.Geo_Text("Temperature Controller",new Chemistry.Point(1510,50),canvas);
    text6.color="black";
    text6.font="24% Arial";

    all_labels.push(text6);

    let text9=new Chemistry.Geo_Text("temp_in_cold",new Chemistry.Point(1540,395),canvas);
    text9.color="black";
    text9.font="24% Arial";

    all_labels.push(text9);

    let text10=new Chemistry.Geo_Text("temp_out_cold",new Chemistry.Point(1700,300),canvas);
    text10.color="black";
    text10.font="24% Arial";

    all_labels.push(text10);
    
}
// to display all labels in activity 4
function display_labels(){
    
    for(let i=0;i<all_labels.length;i++){
        all_labels[i].draw();
    }
}

function show_right_pannel () {
    var bsOffcanvas = new bootstrap.Offcanvas(
        document.getElementById("offcanvasRight3")
      );
      bsOffcanvas.show();
}
