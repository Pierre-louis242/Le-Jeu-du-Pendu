window.onload = () => {
    var check = 0
    let tableMots = 'CHENILLE PAMPERS ASTICOTS GOURDE BABYFOOT KICKER LASAGNES CHAT MAISON HAMBURGER ELEPHANT TOURNEVIS CHAUVE MBOTTA REACTNATIVE JAVASCRIPT FOURCHETTE ECUREUIL POLYESTER BOUTEILLE PERIPATETICIENNE CLOWN PIGEON PALMIER ORDINATEUR PHALANGES CRUSTACES FUNEMBULE PEDONCULE  LIPIZZAN FRANCS FRANGE FRAPES FRAUDE FREAKS FREMIR FREONS FRITTE ABBAYE ABIMER ABOLIR ABOYER ESPION ETOILE EPOXYS EXODES EGAYER DURION DRUIDE DROGUE DOUALA DOUANE DORMIR DONJON DEALER DALLAS DEVISE CRYPTE CRIMES CRAYON COURGE CRAMPE CRANER CODAGE COLITE';
    
    let tableLettres = tableMots.split(' ');
    
    for (i=0 ; i < tableLettres.length; i++){
        tableLettres[i] = tableLettres[i].split('');
    }
    
    let pendu = tableLettres[Math.floor(Math.random()*tableLettres.length)]
    let reponse = [];
    
    reponse.length = pendu.length

    for (let w = 0 ; w < reponse.length; w++){
        reponse[w] = "_" 
        console.log(reponse[w]);
    }
    console.log(reponse);

    let memoire = [];
    
    let form = document.querySelector("form");
    console.log(form)
    form.addEventListener('submit', play);
    
    function affichage(text, selector){
        document.querySelector(selector).innerText = text
    }
    
    function error(text, selector){
        document.querySelector(selector).innerText = text
        setTimeout(()=>{
            document.querySelector(selector).innerText = ""
        }, 3000)
    }

    function play(e,){
        e.preventDefault();
        var voirLettre = e.target.proposition.value.toUpperCase();
        let penduString = pendu.join('');
        
        if(check > 9){
            let perduPerdu = 'Tu as perdu! Pendu ;-) Le mot était ' + penduString;
            affichage(perduPerdu, '.result');  
        }else{
            let guessLetter = function (l){
                let bonneReponse = false;
                for (let i in pendu) {
                    if (l == pendu[i]){
                        reponse[i] = pendu[i]; 
                        bonneReponse = true;
                    }
                }
                return bonneReponse
            }
            var memoMemo = false;
            for (let j in memoire) {
                console.log('state', memoire[j] != voirLettre)
                if (memoire[j] == voirLettre){
                    memoMemo = true;
                }
            }
            if (!memoMemo){
                console.log("lettre", voirLettre)
                memoire.push(voirLettre);
            }else{
                error('La lettre y est déjà', '.error')
            }
            affichage(memoire, ".memory");
            
            function verifTable(pendu, reponse){ 
                for (i = 0; i < pendu.length; i++) {
                    if (pendu[i] != reponse[i]){
                        return false;
                    }
                }
                return true; 
            }
            
            let l = voirLettre;  
            let bonneOuMauvaise = guessLetter(l.toUpperCase()); 
            if(verifTable(pendu, reponse)){
                let motSoluce = penduString + '! Tu as gagné';
                affichage(motSoluce, '.result') 
            }else{
                if(!bonneOuMauvaise){
                    check ++
                }
                let resultatResultat = reponse.join(" ");
                affichage(resultatResultat, '.result');
            }
            affichage(check, '.check');
            e.target.proposition.value = "";
        }
    }
}