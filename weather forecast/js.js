// // var realValue = "off";
// function toggleswitch(){
//     var realValue = document.getElementById("check").innertext;
// }

//     if(realValue == "off"){

//         document.getElementById("check").innertext = "on";
    

//     }elseif(realValue == "on"){
        
//         document.getElementById("check").innertext = "off";
//     }
$(btnid). click(function(){
            
    $.get("https://jsonplaceholder.typicode.com/photos",function(response, status)){
    $.get("http:///wether link",function(response, status)){
        console.log("Type ",typeof response);
        console.log("Data ",response);
        console.log("Status ",status);
        }}})