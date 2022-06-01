let out_Scr = document.getElementById("cal");
function display(num){
    out_Scr.value += num;
}
function Calculate(){
    try{
        out_Scr.value = eval(out_Scr.value);
    }
    catch(err){
        // alert("BokaChoda Kvi Asa hoga!!");
        document.getElementById('Screen').innerHTML = "BokaChoda Kvi Asa hoga!!";
    }
}
function Clear(){

    out_Scr.value = "";
}
function del(){
    out_Scr.value = out_Scr.value.slice(0,-1);
}

