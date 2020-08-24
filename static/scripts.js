var screen = document.getElementById('screen');
     
function pushBtn(obj) {
     
    var pushed = obj.innerHTML;
     
    if (pushed == '=') {
        // Calculate
        screen.innerHTML = eval(screen.innerHTML);
         
    } else if (pushed == 'c') {
        // All Clear
        screen.innerHTML = '0';
         
    } else {
        if (screen.innerHTML == '0') {
            screen.innerHTML = pushed;
             
        } else {
            screen.innerHTML += pushed;   
        }
    }
}