function focusFunc(element){
    element.style.background="grey";
}
function blurFunc(element){
    element.style.background="white";
}
function inputFunc(element){
    var x=element.value;
    document.getElementById("result").innerHTML="Email:" + x;
 }
function changeFunc(element){
    var x=element.value;
    document.getElementById("result1").innerHTML="State:" + x;
}
function submitFunc(){
    var x=document.getElementById("fname").value;
    alert ( x+ " your form is submitted Succesfully!!");
}
function clearFunc()
{
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("emailadd").value="";
}

