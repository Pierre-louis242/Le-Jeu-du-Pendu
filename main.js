window.onload = () => {
    var check = 0
    let tableMots = 'CHENILLE PAMPERS ASTICOTS GOURDE BABYFOOT KICKER LASAGNES CHAT MAISON HAMBURGER ELEPHANT TOURNEVIS CHAUVE MBOTTA REACTNATIVE JAVASCRIPT FOURCHETTE ECUREUIL POLYESTER BOUTEILLE PERIPATETICIENNE CLOWN PIGEON PALMIER ORDINATEUR PHALANGES CRUSTACES FUNEMBULE PEDONCULE LIPIZZAN FRANCS FRANGE FRAUDE FREAKS FREMIR FREONS FRITTE ABBAYE ABIMER ABOLIR ABOYER ESPION ETOILE EPOXYS EXODES EGAYER DURION DRUIDE DROGUE DOUALA DOUANE DORMIR DONJON DEALER DALLAS DEVISE CRYPTE CRIMES CRAYON COURGE CRAMPE CRANER CODAGE COLITE   ';
    
    let tableLettres = tableMots.split(' ');
    
    for (i=0 ; i < tableLettres.length; i++){
        tableLettres[i] = tableLettres[i].split('');
    }
    
    let pendu = tableLettres[Math.floor(Math.random()*tableLettres.length)]
    let reponse = [];
    
    reponse.length = pendu.length

    for (let w = 0 ; w < reponse.length; w++){
        reponse[w] = "_" 
        let reponseReponse = reponse.join(' ')
        affichage(reponseReponse, '.result')
    }

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
        
        if(check >= 9){
            let perduPerdu = 'Tu as perdu! Pendu ;-) Le mot était ' + penduString;
            affichage(perduPerdu, '.result'); 
            check = check + 1 
            affichage(check, '.check');
            var sound = new Audio("sounds/laught3.wav"); // buffers automatically when created
            sound.play();
            let desactivatedInput = document.querySelector("form")
            desactivatedInput.parentNode.removeChild(desactivatedInput);
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
                if (memoire[j] == voirLettre){
                    memoMemo = true;
                }
            }

            if (!memoMemo){
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
                let desactivatedForm = document.querySelector("form")
                desactivatedForm.parentNode.removeChild(desactivatedForm)
                var snd = new Audio("sounds/applause.wav"); // buffers automatically when created
                snd.play();
                let motSoluce = penduString + '! Tu as gagné';
                affichage(motSoluce, '.result') 
            }else{
                if(!bonneOuMauvaise & !memoMemo){
                    check ++
                }
                let resultatResultat = reponse.join(" ");
                affichage(resultatResultat, '.result');
            }
            affichage(check, '.check');
            e.target.proposition.value = ""; 
        }

    // Drawing the Hanged

        var c = document.getElementById("canvasBonhomme");
        var ctx = c.getContext("2d");
        ctx.lineWidth = 10;
        ctx.moveTo(0, 150);
        ctx.lineTo(20, 150);
        ctx.stroke();
        ctx.strokeStyle = "white";
        if (check > 0){
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 150);
            ctx.stroke();
        } 
        if (check > 1){
            ctx.moveTo(0, 0);
            ctx.lineTo(100, 0);
            ctx.stroke();
            ctx.strokeStyle = "white";
        }
        if (check > 2){ 
            ctx.moveTo(0, 30);
            ctx.lineTo(50, 0);
            ctx.stroke();
            ctx.strokeStyle = "white";
        }
        if (check > 3){
            ctx.moveTo(80, 0);
            ctx.lineTo(80, 30);
            ctx.stroke(); 
            ctx.strokeStyle = "white";
        }
        
        // Drawing the Hanged Guy
    
        var X = c.width / 3.7;
        var Y = c.height / 3.9;
        var R = 10;
        
        if (check > 4){
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
        if (check > 5){
            ctx.moveTo(80, 50);
            ctx.lineTo(80, 100);
            ctx.stroke(); 
        }
        if (check > 6){
            ctx.moveTo(80, 60);
            ctx.lineTo(100, 80);
            ctx.stroke(); 
        }
        if (check > 7){
            ctx.moveTo(80, 60);
            ctx.lineTo(60, 80);
            ctx.stroke();
        }
        if (check > 8){
            ctx.moveTo(80, 100);
            ctx.lineTo(100, 120);
            ctx.stroke();
        }
        if (check > 9){
            ctx.moveTo(80, 100);
            ctx.lineTo(60, 120);
            ctx.stroke();
        }
    }
}
