var array = ["John","Yakoov","Johnny","Mary","Steve"];

function check(array) {
    for(var i = 0;i<array.length;i++){
        if(array[i].charAt(0) == "j" || array[i].charAt(0) == "J"){
            console.log("Goodbye" + array[i]);
        }
        else
        console.log("Hello"+ array[i]);
        
    }
    
}

check(array);