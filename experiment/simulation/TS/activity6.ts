var seq:number;
var seq_container:Chemistry.Geometry[]=[];
var pupm_con:Chemistry.Pump_controller; 
var all_valves:Chemistry.Custome_image[]=[];
var show_table_0: boolean = false;
var t0: boolean = true;
var Ti: number;
var To: number;
var temp_diff_1: number = 0;
var temp_diff_2: number = 0;
var control_panel_text: Chemistry.Text;

let t_1_text: Chemistry.Geo_Text;
let t_2_text: Chemistry.Geo_Text;

let show_t1t2: boolean = false;
// var ti: number;
// var to: number;


function new_task_6(text:string) {
   // document.getElementById("a6-question-div-box").innerText = text;
//    add_to_content(text);
}

let act6_table_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="table_0_draw();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;

let btn_to_act7 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity7();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;

function activity6(){
    if(document.getElementById("btn-to-a6")) {
        document.getElementById("btn-to-a6").remove();
    }

    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);

    let slider_ele = `<label for='fr-slider' style='position: absolute; top: 38vw; left: 8vw; width: 15vw; font-size: 1.3vw;'>Flow Rate Indicator</label><input disabled type='range' min='0' max='7' step='1' value='0' id='fr-slider' style='position: absolute; top: 40vw; left: 8vw; width: 15vw;' />`;

    pp.addtoleftpannel(slider_ele);



    pp.addcanvas('main-canvas');

    pp.showtitle(`<p id='exp-title'>Perfom the task to simulate the experiment</p>`, 3);

    canvas = pp.canvas;

    green_circle=[];
    To= -79.9/181.0;  //28.2-43/181.0;
    Ti= -72.3/181.0; //28.2-53/181.0;
    seq=1;
    seq_container=[];

    control_panel_text = new Chemistry.Text("Control Panel", new Chemistry.Point(850, 790), canvas);
    

    let v1 = new Chemistry.Custome_image(red_valve, new Chemistry.Point(360, 420), 66, 19, canvas);
    let v2 = new Chemistry.Custome_image(red_valve, new Chemistry.Point(605, 520), 66, 18, canvas);

    t_1_text = new Chemistry.Geo_Text(`t1 = ${phe_table['t1']} C`, new Chemistry.Point(30, 800), canvas);

    t_1_text.font = '35%';

    t_2_text = new Chemistry.Geo_Text(`t2 = ${phe_table['t2']} C`, new Chemistry.Point(30, 750), canvas);
    t_2_text.font = '35%';

    //push two valaves with custome image class red image also change orientation
    all_valves=[v1, v2];


    pupm_con=new Chemistry.Pump_controller(canvas);
    // document.getElementById("root").appendChild(canvas);
    
    canvas.style.cursor="crosshair";
    context=canvas.getContext("2d");
    rect=canvas.getBoundingClientRect();
    //table_0_draw();
    // canvas.addEventListener('click',a6_mouseclick_seq_2);//inlet cold fluid vlave
    scene=new Scene();
    //add_a6_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
   
       
    var first_geo=new Chemistry.Custome_image(seq0_img,new Chemistry.Point(470,440),688, 650,canvas);
    first_geo.name="first";
    seq_container.push(first_geo);
    a6_check_isinside_cold_in();


    window.onload=a6_windowresize;
    window.onresize=a6_windowresize;
    

    first_geo.draw();
    
    draw_seq_all();
    
    draw_pump_con();
    a6_windowresize();
   
}

function draw_pump_con(){
   pupm_con.draw();
}

function a6_windowresize(){
    //canvas size
    a6_canvas_size();
    //canvas mapping
    a6_canvas_mapping();
    //draw border or rectangle
    scene.draw();
    draw_seq_all();
    draw_pump_con();

    // if(show_table_0) {

    // let table = document.getElementById('table_0');
    // table.style.right = `${rect.x + 100*lscale}px`;
    // table.style.top = `${rect.y+ canvas.height - 550*lscale}px`;
    // table.style.height = `${canvas.height*2.8/4}px`;
    // table.style.fontSize = "0.85vw";
    // }

    // panel.style.height = canvas.height*(1-0.04) + "px";

    // panel.style.width = "28%";
}


function a6_canvas_size(){
    canvas.width=window.innerWidth*0.91;
    canvas.height=canvas.width*1080.0/1920*0.85;
    lscale=canvas.width/1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
}

function a6_canvas_mapping(){
    context.translate(0,canvas.height);
    context.scale(1,-1);
}

function draw_seq_all(){


    scene.draw();

    control_panel_text.draw();
   
    draw_pump_con();

    // all_valves[0].draw();
    all_valves[1].draw();
    
    if(seq==0){
        console.log("open cold water inlet valve ");
        // add_to_content("open cold water inlet valve ");
        pp.showdescription(`<p class='discription_text'>open cold water inlet valve</p> `, 3);
        var bsOffcanvas = new bootstrap.Offcanvas(
            document.getElementById("offcanvasRight3")
          );
          bsOffcanvas.show();
    
    }
    for(let i=0;i<seq_container.length;i++){
        seq_container[i].draw();
    }

    // if(seq==1 && seq_container[1].l < seq_container[1].l_last){
    //     window.requestAnimationFrame(draw_seq_all);
    //     all_valves[0].img = blue_valve;
    //     all_valves[0].stang = 45;
    //     all_valves[0].stpt.x = 360;  //360, 420
    //     all_valves[0].stpt.y = 420;
    // }
    if(seq==1){
        if(seq_container[1].name="second"){
            seq_container.splice(1,1);
            seq_container[0].img=seq1_img;
            seq=2;
            draw_seq_all();
            canvas.addEventListener('click',a6_mouseclick_seq_2);
            console.log("Open glass section outlet valve");

            // let a6_text = new Chemistry.Text("Open glass section outlet valve", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();

            //document.getElementById("a6-question-div-box").innerText = "Open glass section outlet valve";


            // add_to_content("Open glass section outlet valve");
            pp.showdescription(`<p class='discription_text'>Open glass section outlet valve</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
              );
              bsOffcanvas.show();
            
        }
    }

    else if(seq==4 && (seq_container[1].l<seq_container[1].l_last)){
        window.requestAnimationFrame(draw_seq_all);
    }
    else if(seq==4){
        if(seq_container[1].name="third"){
            seq_container.splice(1,1);
            seq_container[0].img=seq11_img;
            seq=5;
            console.log("pump and test section animation completed");

            // let a6_text = new Chemistry.Text("pump and test section animation completed", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();

            //start h pipe animation
            var second_geo=new Chemistry.anim_image_x_dir(seq2_img,new Chemistry.Point(470,440),688, 650,canvas);
            seq_container.push(second_geo);
            second_geo.name="fourth";
            second_geo.l=650;
            second_geo.l_last=650;
            second_geo.width=585;
            second_geo.width_last=250;
            draw_seq_all();
            // second_geo.draw();
        }
    }
    else if(seq==5 && seq_container[1].width>seq_container[1].width_last){
        window.requestAnimationFrame(draw_seq_all);
    }
    else if(seq==5){
        if(seq_container[1].name="fourth"){
            seq_container.splice(1,1);
            seq_container[0].img=seq2_img;
            seq=6;
            console.log("H pipe animation completed");

            // let a6_text = new Chemistry.Text("H pipe animation completed", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();

            //start glass and v pipe animation
            var second_geo1=new Chemistry.anim_image_y_dir_down(seq3_img,new Chemistry.Point(470,440),688, 650,canvas);
            seq_container.push(second_geo1);
            second_geo1.name="fourth";
            second_geo1.startx=400;
            second_geo1.l=80;
            second_geo1.l_last=500;
            second_geo1.width=0;
            draw_seq_all();
            // second_geo.draw();
        }
    }
    else if(seq==6 && seq_container[1].l<seq_container[1].l_last){
        window.requestAnimationFrame(draw_seq_all);
    }
    else if(seq==6){
        if(seq_container[1].name="fourth"){
            seq_container.splice(1,1);
            seq_container[0].img=seq3_img;
            seq=7;
            console.log("glass and v pipe animation completed");

            

            //start next animation
            canvas.addEventListener("click",a6_mouseclick_seq_7);
            console.log("Turn on the heater");


            draw_seq_all();
            // let a6_text = new Chemistry.Text("Turn on the heater", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //document.getElementById("a6-question-div-box").innerText = "Turn on the Heater";
            // add_to_content("Click on the 'h' button on control pannel to turn on the Heater");
            pp.showdescription(`<p class='discription_text'>Click on the 'h' button on control pannel to turn on the Heater</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
              );
              bsOffcanvas.show();
            // second_geo.draw();
        }
    }
    else if(seq==13 && seq_container[seq_container.length-1].l<seq_container[seq_container.length-1].l_last){
        //drawing timer text for first reading 199.60;
        seq_container[3].text=getreadingtime().toString();
        seq_container[2].draw();
        window.requestAnimationFrame(draw_seq_all);
    }
    else if(seq==13){
        seq_container[2].draw();
        console.log("glass fill animation completed");

        canvas.addEventListener('click', open_glass_section_valve_anim);
        seq = 14;

        pp.showdescription(`<p class='discription_text'>Now open the outlet valve again</p>`, 3);

        var bsOffcanvas = new bootstrap.Offcanvas(
            document.getElementById("offcanvasRight3")
          );
          bsOffcanvas.show();
    

    } else if(seq == 14 && seq_container[seq_container.length-1].l<seq_container[seq_container.length-1].l_last) {
        window.requestAnimationFrame(draw_seq_all);
        seq_container[2].draw();
        seq_container[3].draw();
        seq_container[4].draw();
        seq_container[5].draw();

    } else if(seq == 14) {
        seq = 15;
        seq_container[seq_container.length-2].img = seq2_img;
        draw_seq_all();
        seq_container[2].draw();
        seq_container[3].draw();
        seq_container[4].draw();
        seq_container[5].draw();
         pp.showdescription(`<p class='discription_text'>Note down all the readings, You require to fill the table in the next activity</p>`, 3);
        show_table_0 = true;
        if(t0) {    
            t0 = false;
        }
        var bsOffcanvas = new bootstrap.Offcanvas(
            document.getElementById("offcanvasRight3")
          );
          bsOffcanvas.show();

        pp.addtorightpannel(act6_table_btn, 3);
    }


    if(show_t1t2) {
        t_1_text.draw();
        t_2_text.draw();
    }  

    //add all valve draw
    

   
}

var readingtime=0;
function getreadingtime(){
    //if 81 then 199.60 if 83 190.10
    if(get_temp_con_value() == 79.9) {
        readingtime+=13.82/99;//199.60 first data set timer reading 99 time the loop execute
        return(readingtime.toFixed(2));
    }
    // else {
    //     readingtime+=190.10/99;//199.60 first data set timer reading 99 time the loop execute
    //     return(readingtime.toFixed(2));
    // }
    
}

function a6_mouseclick(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    a6_check_isinside_cold_in();
    //all_valves[0].img="green color" change stpt angle
}

function a6_mouseclick_seq_2(e:MouseEvent){
   
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=494 && y<=545){
        if(x>=506 && x<=681){
            seq=3;
           
            // canvas.removeEventListener("click",a6_mouseclick_seq_2);
            console.log("Open hot fluid pump outlet valve");
            //document.getElementById("a6-question-div-box").innerText = "Open hot fluid pump valve";
            // add_to_content("Click on 'p' button on control panel to turn on the pump");
            pp.showdescription(`<p class='discription_text'>Click on 'p' button on control panel to turn on the pump</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
              );
              bsOffcanvas.show();
            
            

            //canvas.addEventListener("click",a6_mouseclick_seq_3);
            //add rotation of glass section valve open green color
            //all_valves[1].img="green color" change stpt angle
            all_valves[1].img = blue_valve;
            all_valves[1].stang = 45;
            all_valves[1].stpt.y = 510;
            all_valves[1].stpt.x = all_valves[1].stpt.x - 12;

            show_t1t2 = true;


            
            draw_seq_all();

            // let a6_text = new Chemistry.Text("Open hot fluid pump outlet valve", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            a6_mouseclick_seq_3();

            let sl: HTMLInputElement = <HTMLInputElement> document.getElementById('fr-slider');
            sl.value='1';

            canvas.removeEventListener('click', a6_mouseclick_seq_2);
            
            
        }
    }
    // a6_check_isinside_cold_in(x,y);
}

function a6_mouseclick_seq_3(){
    
            seq=4;
            canvas.removeEventListener("click",a6_mouseclick_seq_3);
            console.log("Click pump power on");

           

            canvas.addEventListener("click",a6_mouseclick_seq_35); 
            a6_add_slider();    
                
        
}

function a6_mouseclick_seq_35(e:MouseEvent){
    new_task_6("Please wait...");
    pp.showdescription(`<p class='discription_text'>Please Wait till the animation completes...</p>`, 3);

    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=680 && y<=810){
        if(x>=855 && x<=910){
            console.log("here")
            seq=4;
            canvas.removeEventListener("click",a6_mouseclick_seq_35);
            console.log("Pump animation");
            pupm_con.color="green";
            var second_geo=new Chemistry.anim_image(seq2_img,new Chemistry.Point(470,440),688, 650,canvas);
            seq_container.push(second_geo);
            second_geo.name="third";
            second_geo.l=1;
            second_geo.l_last=600;
            second_geo.width=380;
            let slider: HTMLInputElement = <HTMLInputElement> document.getElementById("a6_slider");
            // slider.value = "1";
            
            draw_seq_all();
            
        }
    }
    // a6_check_isinside_cold_in(x,y);
}

function a6_mouseclick_seq_7(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=688 && y<=769){
        if(x>=943 && x<=1020){
            seq=8;
            canvas.removeEventListener("click",a6_mouseclick_seq_7);
            canvas.addEventListener("click",a6_mouseclick_seq_8);
            canvas.addEventListener("click",a6_mouseclick_seq_9);
            canvas.addEventListener("click",a6_mouseclick_timer_start);
            console.log("Heater on");
            pupm_con.color1="green";
            //start timer
            
            console.log("click on up arrow to select desire temperature and click start on timer");

            

            //timer image
            var second_geo=new Chemistry.anim_image(seq5_img,new Chemistry.Point(1000,325),290, 210,canvas);
            seq_container.push(second_geo);
            second_geo.name="timer";
            second_geo.l=210;
            second_geo.l_last=210;
            second_geo.width=0;
            draw_seq_all();
            index_temp_con=-1;

            // let a6_text = new Chemistry.Text("click on up arrow to select desire temperature and click start on timer", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
           // document.getElementById("a6-question-div-box").innerText = "Click Buttons on Temp Controller to select a Temperature";
        //    add_to_content("Click on up and down arrow on temp controller to select the temperature");
            pp.showdescription(`<p class='discription_text'>Click on up and down arrow on temp controller to select the temperature</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
              );
              bsOffcanvas.show();


            
        }
    }
    // a6_check_isinside_cold_in(x,y);
}

function a6_mouseclick_seq_8(e:MouseEvent){
   
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=408 && y<=440){
        if(x>=688 && x<=780){
            new_task_6("");
            //get temp text
            seq=9;
            console.log("temp up controller event");

            // let a6_text = new Chemistry.Text("temp up controller event", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            // canvas.removeEventListener("click",a6_mouseclick_seq_7);
            if(seq_container.length>2){
                seq_container.splice(2,seq_container.length);
            }
            if(index_temp_con<temp_con.length-1){
                index_temp_con = 0;
                console.log(index_temp_con);
            }
            
            let temp_con_value=get_temp_con_value();
            var second_geo=new Chemistry.Geo_Text(temp_con_value.toString(),new Chemistry.Point(670,390),canvas);
            selected_temp = temp_con_value;
            set_global_temp_ind(temp_con_value);
            console.log("the selected temp value is: " + temp_con_value);
            
            second_geo.textalingment="center";
            seq_container.push(second_geo);
            second_geo.name="temp_con";
            
            draw_seq_all();

            // add_to_content("Click on start button to Start the timer");
            pp.showdescription(`<p class='discription_text'>Click on start button to Start the timer</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
              );
              bsOffcanvas.show();
            
        }
    }
    // a6_check_isinside_cold_in(x,y);
}

function a6_mouseclick_seq_9(e:MouseEvent){
   
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=335 && y<=380){
        if(x>=688 && x<=780){
            new_task_6("");
            //get temp text
            seq=9;
            console.log("temp down controller event");

            // let a6_text = new Chemistry.Text("temp down controller event", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            // canvas.removeEventListener("click",a6_mouseclick_seq_7);
            if(seq_container.length>2){
                seq_container.splice(2,seq_container.length);
            }
            if(index_temp_con>0){
                index_temp_con = 0;
            }
            
            let temp_con_value=get_temp_con_value();

            var second_geo=new Chemistry.Geo_Text(temp_con_value.toString(),new Chemistry.Point(670,390),canvas);
            selected_temp = temp_con_value;
            set_global_temp_ind(temp_con_value);
            
            for(let i = 0; i < readings.length; i++) {
                if(Math.round(temp_con_value) == Math.round(readings[i].temp)) {
                    selected_data_index = i;
                }
            }


            console.log("the selected temp value is: " + temp_con_value);
            second_geo.textalingment="center";
            seq_container.push(second_geo);
            second_geo.name="temp_con";
            
            draw_seq_all();
            
        }

        // add_to_content("Click on start button to Start the timer");
        pp.showdescription(`<p class='discription_text'>Click on start button to Start the timer</p>`, 3);
        var bsOffcanvas = new bootstrap.Offcanvas(
            document.getElementById("offcanvasRight3")
          );
          bsOffcanvas.show();
    }
    // a6_check_isinside_cold_in(x,y);
}
var timer_anim=true;
function a6_mouseclick_timer_start(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=240 && y<=290){
        if(x>=900 && x<=970){
            //get temp text
           
            if(index_temp_con>=0){
                seq=10;
                console.log("timer start");
                new_task_6("Start timer");
                console.log("stop the time after steady state temp i.e. after 900 sec");

               

                // let a6_text = new Chemistry.Text("stop the time after steady state temp i.e. after 900 sec", new Chemistry.Point(1125, 600), canvas);
                // a6_text.color = "yellow";
                // a6_text.font = "24px";
                // a6_text.draw();

              //  document.getElementById("a6-question-div-box").innerText = "stop the time after steady state temp i.e. after 900 sec";

            //   add_to_content("stop the time after steady state temp i.e. after 900 sec");
            

                canvas.removeEventListener("click",a6_mouseclick_seq_8);
                canvas.removeEventListener("click",a6_mouseclick_seq_9);
                canvas.removeEventListener("click",a6_mouseclick_timer_start);
                seq_container[1].img=seq6_img;
                let settime=0;
                //timer text
                var second_geo=new Chemistry.Geo_Text(settime.toString(),new Chemistry.Point(984,332),canvas);
                seq_container.push(second_geo);
                second_geo.font="24px Arial";
                second_geo.textalingment="center";
                second_geo.name="timer text";
                //Ti text
                var Ti_text=get_Ti_text();
                var Ti_value=new Chemistry.Geo_Text(Ti_text.toString(),new Chemistry.Point(310,324),canvas);
                seq_container.push(Ti_value);
                Ti_value.textalingment="center"
                //To text
                var To_text=get_To_text();
                var To_value=new Chemistry.Geo_Text(To_text.toString(),new Chemistry.Point(310,696),canvas);
                seq_container.push(To_value);
                To_value.textalingment="center"
                 //ti text
                //  var ti_text=get_ti_text();
                //  var ti_value=new Chemistry.Geo_Text(ti_text.toString(),new Chemistry.Point(335,432),canvas);
                //  seq_container.push(ti_value);
                //  ti_value.textalingment="center"
                //  //ti text
                //  var to_text=get_to_text();
                //  var to_value=new Chemistry.Geo_Text(to_text.toString(),new Chemistry.Point(165,640),canvas);
                //  seq_container.push(to_value);
                //  to_value.textalingment="center";
                // var ii=1;
                anim_timer();
                
                function anim_timer(){
                    second_geo.text=settime.toString();
                    Ti_value.text=get_Ti_text().toString();
                    To_value.text=get_To_text().toString();
                    draw_seq_all();
                    settime+=5;
                    // console.log(ii);
                    if(settime<=900){
                        // ii++;
                        window.requestAnimationFrame(anim_timer);
                    }
                    else{
                        console.log("click stop timer");

                        pp.showdescription(`<p class='discription_text'>stop the time after steady state temp i.e. after 900 sec</p>`, 3);
                        var bsOffcanvas = new bootstrap.Offcanvas(
                            document.getElementById("offcanvasRight3")
                          );
                          bsOffcanvas.show();



                        

                        timer_anim=true;
                        seq_container[1].img=seq7_img;
                        // let a6_text = new Chemistry.Text("click stop timer", new Chemistry.Point(1125, 600), canvas);
                        // a6_text.color = "yellow";
                        // a6_text.font = "24px";
                        // a6_text.draw();
                      //  document.getElementById("a6-question-div-box").innerText = "stop the timer";
                    //   add_to_content("stop the timer");
                        canvas.addEventListener("click",a6_mouseclick_timer_stop)
                        anim_timer_900_more();

                        
                    }
                }

                function anim_timer_900_more(){
                    second_geo.text=settime.toString();
                    settime++;
                    draw_seq_all();
                    if(timer_anim){
                        window.requestAnimationFrame(anim_timer_900_more);
                    }
                    else{
                        console.log("timer has stoped");

                        seq_container[1].img=seq8_img;
                        draw_seq_all();
                        console.log("Click to reset the timer");

                        pp.showdescription(`<p class='discription_text'>Click to reset the timer</p>`, 3);

                        var bsOffcanvas = new bootstrap.Offcanvas(
                            document.getElementById("offcanvasRight3")
                          );
                          bsOffcanvas.show();

                        // let a6_text = new Chemistry.Text("Click to reset the timer", new Chemistry.Point(1125, 600), canvas);
                        // a6_text.color = "yellow";
                        // a6_text.font = "24px";
                        // a6_text.draw();

                     //   document.getElementById("a6-question-div-box").innerText = "Click to reset the timer";

                    //  add_to_content("Click to reset the timer")

                        canvas.addEventListener("click",a6_mouseclick_timer_reset);
                        //add event listern to reset
                    }

                    
                }
            }
        }
    }
}

function a6_mouseclick_timer_stop(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=240 && y<=290){
        if(x>=1080 && x<=1160){
            //get temp text
            seq=11;
            timer_anim=false;
            console.log("timer stopping");
            canvas.removeEventListener("click",a6_mouseclick_timer_stop);
            
        }
    }
}

function a6_mouseclick_timer_reset(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=240 && y<=290){
        if(x>=970 && x<=1015){
            //get temp text
            seq=12;
            timer_anim=false;
            console.log("timer reset");
            seq_container[3].text="0";
            canvas.removeEventListener("click",a6_mouseclick_timer_reset);
            seq_container[1].img=seq5_img;
            draw_seq_all();
            canvas.addEventListener("click",a6_mouseclick_seq_12);
            console.log("close outlet glass valve and start timer");
            pp.showdescription(`<p class='discription_text'>Close outlet glass valve and start timer</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
            );
            bsOffcanvas.show();
            // let a6_text = new Chemistry.Text("close outlet glass valve and start timer", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
         //   document.getElementById("a6-question-div-box").innerText = "Close outlet gas valve and start timer";
        //  add_to_content("Close outlet glass valve and start timer");
}
    }
}

function a6_mouseclick_seq_12(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x,y);
    if(y>=477 && y<=550){
        if(x>=593 && x<=660){
            seq=13;
            canvas.removeEventListener("click",a6_mouseclick_seq_12);
            console.log("Glass valve closed")
            //add rotation of glass section valve closed
            seq_container[0].img=seq9_img;
            let glass=new Chemistry.anim_image(seq10_img,new Chemistry.Point(470,440),688, 650,canvas);
            glass.l=475;
            glass.l_last=575;
            glass.width=200;
            glass.startx=400;
            seq_container.push(glass);
            readingtime=0;
            //glass outlet valve to red img change stpt and angle
            //all_valves[0].img="red color"
            all_valves[1].img = red_valve;
            all_valves[1].stang = 0;
            all_valves[1].stpt.y = 520;
            draw_seq_all();
            //animate glass section fill
            pp.showdescription(`<p class='discription_text'>Click Next</p>`, 3);
            var bsOffcanvas = new bootstrap.Offcanvas(
                document.getElementById("offcanvasRight3")
            );
            bsOffcanvas.show();
        }
    }
    
}

//console.log("the selected temp value is: " + readings[selected_ind].reading[0][1]);


function open_glass_section_valve_anim(e) {
    e.preventDefault();
    console.log("event triggered");
    
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    console.log(x, y);
    
    if(y>=494 && y<=545){
        if(x>=506 && x<=681){

            let seq_img = new Chemistry.anim_image_y_dir_down(seq3_img,new Chemistry.Point(470,440),688, 650,canvas);

            all_valves[1].img = blue_valve;
            all_valves[1].stang = 45;
            all_valves[1].stpt.y = 520;

            seq_container.push(seq_img);
            seq_img.name="last";
            seq_img.l=1;
            seq_img.l_last=700;
            seq_img.width=0;
            draw_seq_all();
        }
    }
    
}


function get_Ti_text(){
    //if 81 then 81.2 if 83 then 83.2
    Ti+=(79.9/181.0);//81.2-28.2=53 181 is the no of times loop execute check data set
    return(Ti.toFixed(2));
}


function get_To_text(){
    //if 81 then 71.2 if 83 then 66.5
    To+=(72.3/181.0); //71.2-28.2=43 181 is the no of times loop execute check data set
    return(To.toFixed(2));
}

function get_ti_text(){
    var ti=To=readings[selected_ind].reading[0][3];
    return(ti.toFixed(2));
}

function get_to_text(){
    //if 81 to 28.3 if 83 to 30
    var to=readings[selected_ind].reading[0][4];
    return(to.toFixed(2));
}
var index_temp_con=-1;
var temp_con=[79.9];//from data set


function get_temp_con_value(){
    console.log(temp_con[index_temp_con]);
    
    let temp=temp_con[index_temp_con];
    
    return(temp);
}

function a6_check_isinside_cold_in(){
    console.log();
    
    
    console.log("condition satisfied");
    
    //cold inlet valve click check
    var second_geo=new Chemistry.anim_image(seq0_img,new Chemistry.Point(470,440),688, 650,canvas);
    seq_container.push(second_geo);
    second_geo.name="second";
    second_geo.l=290;
    second_geo.l_last=525;
    second_geo.width=380;
    seq=1;
    draw_seq_all();
    //add rotation of cold inlet valve open
    canvas.removeEventListener("click",a6_mouseclick);
      
}

function a6_add_slider() {
    let slider: HTMLInputElement = <HTMLInputElement> document.createElement('input');
    slider.type = "range";
    slider.id = "a6_slider";
    slider.min = "0";
    slider.max = "4";
    slider.step = "1";
    slider.value = "0";
    slider.style.width = "60px";
    slider.style.position = "absolute";
    slider.style.left = `${rect.x + 250*lscale}px`;
    slider.style.top = `${rect.y + canvas.height - 120*lscale}px`;
   // document.getElementById("root").appendChild(slider);

    // pp.addtoleftpannel(`<input style='position: absolute; width: 60px;' id='a6_slider' type='range' min='0' max='4' step='1' value='0' />`);

    // let ele = <HTMLInputElement> document.getElementById('a6_slider');

    // ele.style.left = `${rect.x + 250*lscale}px`;
    // ele.style.top = `${rect.y + canvas.height - 120*lscale}px`;
   

}


function table_0_draw() {



    pp.clearleftpannel();

    pp.showdescription(`<p class='discription_text'>Enter the corresponding values</p>`, 3);

    if(document.getElementById('panel1_btn')) {
        let btn = document.getElementById('panel1_btn');
        btn.remove();
    }

    let heading = ['t  (sec)', 'T1 (C)', 'T2 (C)', 'Check'];
    let row = [[phe_table['t'][0].toFixed(4), `<input type="text" class='form-control' id='obs-1' />`, `<input type="text" class='form-control' id='obs-2' />`, `<button  class="btn btn-info" id="table-0-verify" style='font-size: 1.5vw;' onclick='verify_readings();'>verify</button>`]];


    // for(let i=0; i<phe_table['T1'].length; i++) {
    //     row[i] = [phe_table['t'][i].toString(), phe_table['T1'][i], phe_table['T2'][i]];
    // }

    
    let obs = new Observation_Table(heading, row);
    let table = obs.template;

    pp.addtoleftpannel(table);

    obs.draw();
 
}

var selected_ind: number = -1;

function verify_readings() {

    let index = -1;
    // let heading = ['t  (sec)', 'T1 (C)', 'T2 (C)', 'Check'];
    // let row = [];

    // for(let i=0; i<phe_table['T1'].length; i++) {
    //     row[i] = [phe_table['t'][i].toString(), phe_table['T1'][i], phe_table['T2'][i]];
    // }


    let inp1: HTMLInputElement = <HTMLInputElement> document.getElementById("obs-1");

    let inp2: HTMLInputElement = <HTMLInputElement> document.getElementById("obs-2");



    let val1 = parseFloat(inp1.value);
    let val2 = parseFloat(inp2.value);


    if(!verify_values(phe_table['T1'][0], val1)) {
        // add_to_content("Incorrect Timer Reading");
        alert('T1 value is incorrect');
        return false;
    }

    if(!verify_values(phe_table['T2'][0], val2)) {
        // add_to_content("Ti value is incorrect");
        alert('T2 value is incorrect');
        return false;
    }

    alert('Both entered values are correct!!');
    pp.showdescription(`<p class='discription_text'></p>`, 3);


   
    document.getElementById("table-0-verify").remove();

    fill_table(index);

    

    return true;

}


function fill_table(index: number) {
    show_table_0 = true;

    let heading = ['t  (sec)', 'T1 (C)', 'T2 (C)'];
    let rows = [];

    for(let i=0; i<phe_table['T1'].length; i++) {
        rows[i] = [phe_table['t'][i].toFixed(4), phe_table['T1'][i].toFixed(4), phe_table['T2'][i].toFixed(4)];
    }

    pp.clearleftpannel();
    
    let obs = new Observation_Table(heading, rows);

    let table = obs.template;
    pp.addtoleftpannel(table);
    obs.draw();

    pp.addtorightpannel(btn_to_act7, 3);

}

function set_global_temp_ind (temp_value: number) {
    for(let i=0; i<readings.length; i++) {
        if(Math.round(readings[i].temp) == temp_value) {
            selected_ind = i;

            temp_diff_1 = readings[selected_ind].reading[0][1] - readings[selected_ind].reading[0][3];
            temp_diff_2 = readings[selected_ind].reading[0][2] - readings[selected_ind].reading[0][3];

            Ti=readings[selected_ind].reading[0][3]-temp_diff_1/181.0;

            To=readings[selected_ind].reading[0][3]-temp_diff_2/181.0;
        } 
    }

    console.log("index set to " + selected_ind);
    
}

//activity6();



















































