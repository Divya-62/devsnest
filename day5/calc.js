function screen(val){
    document.getElementById("box").value=val;
}
function shownum(val){
    document.getElementById("box").value += val;
}
function solve(){
    try{
        screen(eval(document.getElementById("box").value));
    }
    catch(e){
        screen('Error');
    }
}
function clear(){
    document.getElementById("box").value="";
}
function deleteback(){
    var valueNeeded=document.getElementById("box").value;
    var finalValueNeeded=valueNeeded.substr(0,valueNeeded.length-1);
    document.getElementById("box").value=finalValueNeeded;
}
