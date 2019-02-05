window.onload = () => {
    let tableMots = 'FRANCS FRANGE FRAPES FRAUDE FREAKS FREMIR FREONS FRITTE ABBAYE ABIMER ABOLIR ABOYER ESPION ETOILE EPOXYS EXODES EGAYER DURION DRUIDE DROGUE DOUALA DOUANE DORMIR DONJON DEALER DALLAS DEVISE CRYPTE CRIMES CRAYON COURGE CRAMPE CRANER CODAGE COLITE';

    let tableLettres = tableMots.split(' ');

    for (i=0 ; i < tableLettres.length; i++){
        tableLettres[i] = tableLettres[i].split('');
    }

    let pendu = tableLettres[Math.floor(Math.random()*tableLettres.length)]
    let reponse = ['','','','','',''];
    let penduString = pendu.join('');
    console.log(penduString);

    let form = document.querySelector("form");
    console.log(form);
    form.addEventListener('submit', play);

    function affichage(text, selector){
        document.querySelector(selector).innerText = text
    }

    function play(e){
      var check = 0;
      e.preventDefault();
      console.log(check);
      if (check<10){
        var voirLettre = e.target.proposition.value;
        console.log(e.target.proposition.value);

        let guessLetter = function (l){
          let bonneReponse = false;
          for (let i = 0; i < pendu.length; i++) {
            if (l == pendu[i]){
                reponse[i] = pendu[i];
                bonneReponse = true;
                console.log(reponse);
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

        let compteur=document.getElementById('check');
        console.log(compteur);
        test(pendu, reponse, check, compteur);

        function test (pendu, reponse, check, compteur){
          let l = voirLettre;
          let bonneOuMauvaise = guessLetter(l.toUpperCase());
          if(verifTable(pendu, reponse)){
            let motSoluce = penduString + '! Tu as gagné';
            affichage(motSoluce, '.result')
          }else{
            if(!bonneOuMauvaise){
              console.log(bonneOuMauvaise)
              compteur ++;
              console.log(compteur);
              affichage(compteur, '.check');
            }
          }
        }

      }
      else{
        let perduPerdu = 'Tu as perdu! Pendu ;-) Le mot était ' + penduString;
        affichage(perduPerdu, '.result');
      }
    }

}
