 let count = 0 ;
function incrementCounter(){
    count++
    document.getElementById("count").innerText  = count;
}  

function save(){
   let countStr = count + " - " 
   document.getElementById("save-el").innerHTML += countStr
   document.getElementById("count").innerHTML = 0
   count = 0
}