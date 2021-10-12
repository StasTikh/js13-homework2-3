function isNumber() {
    let answer1 = +inputCode.value.replace(/\s+/g, '')
      
    if(Number.isNaN(answer1)){
      outCorr.innerHTML = "Only numbers";
      answer1 = ""; 
    } 
  }
  