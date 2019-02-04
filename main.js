window.onload = () => {
    let tableMots = 'FRANCS FRANGE FRAPES FRAUDE FREAKS FREMIR FREONS FRITTE ABBAYE ABIMER ABOLIR ABOYER ESPION ETOILE EPOXYS EXODES EGAYER DURION DRUIDE DROGUE DOUALA DOUANE DORMIR DONJON DEALER DALLAS DEVISE CRYPTE CRIMES CRAYON COURGE CRAMPE CRANER CODAGE COLITE';
    
    let tableLettres = tableMots.split(' ');
    
    for (i=0 ; i < tableLettres.length; i++){
        tableLettres[i] = tableLettres[i].split('');
    }
    
    let pendu = tableLettres[Math.floor(Math.random()*tableLettres.length)]
    let reponse = ['','','','','',''];
     
    
    let guessLetter = function (l){
        let bonneReponse = false;
        for (let i = 0; i < pendu.length; i++) {
            if (l == pendu[i]){
                reponse[i] = pendu[i]; 
                bonneReponse = true;
            }
        }
        return bonneReponse
    }
    
    function verifTable(pendu, reponse){ 
        for (i = 0; i < pendu.length; i++) {
            if (pendu[i] != reponse[i]){
                return false;
            }
        }
        return true; 
    }
    
    function affichage(text, selector){
        document.querySelector(selector).innerText = text
    }
    
    function test (pendu, reponse, check){
        let l = prompt('Devine une lettre du mot?');
        let penduString = pendu.join('');
        let bonneOuMauvaise = guessLetter(l.toUpperCase()); 
        affichage(check, '.check')
        if(check > 2){
            let perduPerdu = 'Tu as perdu! Pendu ;-) Le mot était ' + penduString;
            affichage(perduPerdu, '.result') 
        }else if(verifTable(pendu, reponse)){
            let motSoluce = penduString + '! Tu as gagné';
            affichage(motSoluce, '.result') 
        }else{
            if(!bonneOuMauvaise){
                check ++
            }
            test(pendu, reponse, check);
        }
    }
    
    test(pendu, reponse, 0);
}