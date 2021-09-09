var opened = false

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  

async function changePadding() {
    const box = document.getElementsByClassName("Box")[0]
    const textbox = document.getElementsByClassName("Text")[0]
    
    if (opened){
        box.style.paddingTop = 40 + "vh"
    } else {
        box.style.paddingTop = 20  + "vh"
        await sleep(2000)
        textbox.style.opacity = "1"
        textbox.style.height = "auto"
        textbox.style.paddingTop = "0px"
    }
    opened = !opened
}
