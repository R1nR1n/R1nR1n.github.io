var opened = false

function DoPadding(){
    let start = Date.now()
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
    
        if (timePassed >= 1000) {
        clearInterval(timer);
        return;
        }
        changePadding(timePassed);
    }, 20);
    opened = !opened
    
}


function changePadding(timePassed) {
    const box = document.getElementsByClassName("Box")[0]
    const infobox = document.getElementsByClassName("InfoBox")[0]
    if (opened){
        box.style.paddingTop = 40 - timePassed/50 + "vh"
        infobox.style.height = timePassed/50 + "vh"
    } else {
        box.style.paddingTop = 20 + timePassed/50  + "vh"
        infobox.style.height = timePassed/50 + "vh"
    }
}
