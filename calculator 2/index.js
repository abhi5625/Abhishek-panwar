
         let outputScreen = document.getElementById("output-screen");

             function display(num){
                outputScreen.value += num;
} 
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
alert("invalid");
    }
    function Clear(){
        clear.value = "";
    }
    function del(){
        del.value = outputScreen.valueslice(0 ,-1); 
    }
}
