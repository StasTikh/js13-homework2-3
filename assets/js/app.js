
function isCardValid() {
 
    let cardNumber = inputCode.value.replace(/\s+/g, '');
    let numberCheck = 0;
    let isOdd = true;
     
    for (i=cardNumber.length-1; i>=0; i--) {
        let checkNumber = +cardNumber[i];
        if (!isOdd) {
            if ((checkNumber = checkNumber * 2) > 9){
                checkNumber = checkNumber - 9;    
            }
        }
        numberCheck = numberCheck + checkNumber;
        isOdd = !isOdd;
        console.log(numberCheck, checkNumber, isOdd)
    }

    if ((numberCheck % 10) == 0) {
        outCorr.innerHTML = "Correct";
        //outType.style.display = "block";
    } else {
        outCorr.innerHTML = "Incorrect";
        outType.style.display = "none";
    }
    
    let visa = 4;
    let masterCard = ['51', '52', '53', '54', '55'];
    for (i=2221; i<=2720; i++) {
        masterCard.push(i);
    }
    let maestro = ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'];
    let americanExpress = ['34', '37'];
    let dinersClub = 36;
    let otherType = false;
    let typeCheck = inputCode.value.slice(0, 4).split('');
    
    if (typeCheck[0] == visa) {
        //outType.innerHTML = "Visa";
        cardImg.src = "./assets/img/visa.jpg";
        otherType = true;
    } else {
        for (i=0; i<masterCard.length; i++) {
            if((typeCheck[0]+typeCheck[1]) == masterCard[i]) {
                //outType.innerHTML = "Master Card";
                cardImg.src = "./assets/img/Mastercard.png";
                otherType = true;
            } else if ((typeCheck[0]+typeCheck[1]+typeCheck[2]+typeCheck[3]) == masterCard[i]) {
                //outType.innerHTML = "Master Card";
                cardImg.src = "./assets/img/Mastercard.png";
                otherType = true;
            }
        }
        
        for (i=0; i<maestro.length; i++) {
            if((typeCheck[0]+typeCheck[1]+typeCheck[2]+typeCheck[3]) == maestro[i]) {
                //outType.innerHTML = "Maestro";
                cardImg.src = "./assets/img/maestro.png";
                otherType = true;
            }
        }

        for (i=0; i<americanExpress.length; i++) {
            if((typeCheck[0]+typeCheck[1]) == americanExpress[i]) {
                //outType.innerHTML = "American Express";
                cardImg.src = "./assets/img/American_Express.png";
                otherType = true;
            }
        }

        
        if(typeCheck[0]+typeCheck[1] == dinersClub) {
            //outType.innerHTML = "Diners Club";
            cardImg.src = "./assets/img/diners.jpg";
            otherType = true;
        }
        
    }
    
    if (!otherType) {
        //outType.innerHTML = "Other card type";
        cardImg.src = "./assets/img/other.jpg";
    }
    console.log(typeCheck);

}

