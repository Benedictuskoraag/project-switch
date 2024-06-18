function saklar(action, lamp) {
    let toggle = document.getElementById("sr-only peer")
if(toggle) {
console.log ('di nyalakan');
} else {
    console.log ('di matikan');
}

        let lampu1 = document.getElementById ("lampu1") ;
        let lampu2 = document.getElementById ("lampu2") ;
        let lampu3 = document.getElementById ("lampu3") ;
        if(action == "on") {
         if(lamp == 1) {
            lampu1.src = "asets/images/on.gif" ;
        }
         if(lamp == 2){
        lampu2.src = "asets/images/on.gif" ;
       }
         if(lamp == 3) {
        lampu3.src = "asets/images/on.gif" ;
       }

        }
        if(action== "off") {
            lampu1.src = "asets/images/off.gif" ;
            if(lamp == 1){
                lampu1.src = "asets/images/off.gif" ;
            }
            if (lamp == 2) {
                lampu2.src = "asets/images/off.gif" ;
            }
            if(lamp == 3){
                lampu3.src = "asets/images/off.gif" ; 
            }

        }
        
        
       
       
}