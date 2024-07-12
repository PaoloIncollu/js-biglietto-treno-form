



const sendButton = document.querySelector('#send');
sendButton.addEventListener('click', 
    
    function (event){

    event.preventDefault();

    const kmInput = document.getElementById('km');
    console.log('km da percorrere:', kmInput.value);
    const ageInput = document.getElementById('age');
    console.log('Età del passeggero:', ageInput.value);

    const prezzoKm = (0.21);
    let prezzoBiglietto = (kmInput.value * prezzoKm);
    
    if (ageInput.value < 18) {

    prezzoBiglietto = prezzoBiglietto * 0.8;
    prezzoBiglietto = Math.round(prezzoBiglietto * 100.0)/100.0;
    //document.getElementById ('prezzo-biglietto').innerHTML= prezzoBiglietto;
    console.log(prezzoBiglietto);
}

else if (ageInput.value >= 65) {

    prezzoBiglietto = prezzoBiglietto * 0.6 ;
    prezzoBiglietto = Math.round(prezzoBiglietto*100.0)/100.0;
    //document.getElementById ('prezzo-biglietto').innerHTML= prezzoBiglietto;
    console.log(prezzoBiglietto);
}

else{

    
    prezzoBiglietto = Math.round(prezzoBiglietto*100.0)/100.0;
    //document.getElementById ('prezzo-biglietto').innerHTML= prezzoBiglietto ;
    console.log(prezzoBiglietto);
}
}




)



   
      