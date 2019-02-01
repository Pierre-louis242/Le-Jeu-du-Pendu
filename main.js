// var nombreEnfant,
// nomFemme,
// pays,
// metier; 

// var nombreEnfant = "N"; 
// var nomFemme = "Z"; 
// var pays = "Y"; 
// var metier = "X"; 

// console.log("Vous serez " + metier + " et habiterez à " + pays + ", et marié à " + nomFemme + " avec " + nombreEnfant + " enfants.");

// var annee = 2019; 
// var anneNaissance = 1993;

// var ageMbotta = annee - anneNaissance; 

// console.log ("Mbotta a " + ageMbotta + " ans.")

// // var age = 24; 
// // var ageMax = prompt("Jusqu'à quel age souhaitez-vous vivre?") 
// // var denreeAlimentaire = prompt('Quelle est votre denrée alimentaire?'); 
// // var consoJournaliere = prompt('Combien en consommez-vous par jour?'); 
// // var jour = 365; 

// // var consoVie = ((ageMax - age)* jour)*consoJournaliere; 



// // console.log ("Il vous reste " + consoVie + " de " + denreeAlimentaire + " avant d'ateindre l'age de " + ageMax +  " ans")

// // var fr = "Bonjour tout le monde";
// // var es = "Hola, Mundo";
// // var an = "Hello world";

// // var langueChosen = prompt("Quelle est votre langue, français, espagnol ou anglais?");

 
// // if (langueChosen == "français") {console.log(fr)} 
// // else if (langueChosen == "espagnol") {console.log(es)} 
// // else if (langueChosen == "anglais") {console.log(an)};

// var sous = function (a, b) {
//     return a - b;
// };

// var mult = function (a, b) {
//     return a * b; 
// }; 

// var div = function (a, b) {
//     return a / b; 
// }; 

// var pourcentage = function (a, b){
//     return a / 100 * b
// };

// var result = div (400, 5); 

// console.log (result + " Km/h");


// for (var i = 1; i < 21; i++) {
    // if ((i %2) == 0) {
    //     console.log (i + " Pair")
    // }
    // else {
    //     console.log (i + " Impair")
    // }
// }   

// for (var i = 0; i < 11; i++) {
//     var result = mult (i, 9);
//     console.log (i + " x 9 = " +result);
// }

// var boucle = function (a) {
//     if (a > 90) {
//         return "A"
//     }
//     else if (a > 80) {
//         return "B"
//     }
//     else if (a > 70) {
//         return "C"
//     }
//     else if (a > 65) {
//         return "D"
//     }
//     else  {
//         return "F"
//     }
// };

// for (var i = 0; i < 101; i++) {
//     var result = boucle (i);
//     console.log ("Pour " + i + " points vous avez le grade " + result); 
// };

// var p = " "

// for (var b = 0; b < 5; b++) {
//     p = " *" + p;
//     console.log (p); 
// };

// let helloFrom = function (personName) {
//     return "Bonjour de " + personName;
// }

// let people = ["Tom", "Yoda", "Ron"];
// people.push("Bob", "Dr Mal");
//     for (let i = 0; i < people.length; i++) {
//         let greeting = helloFrom(people[i]);
//         console.log(greeting);
// }


// let suite = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resultat = 0;
// for (let i = 0; i < 9; i++) {
//         resultat = suite[i] + resultat;
//         console.log(resultat);
// }


// let actor = ["Stalone" , "Watson", "Diaz"];
// let bestActor = ["Le premier est ", "Le deuxième est ", "Le troisième est " ];
// for (let i = 0; i < actor.length; i++) {
//     let b = bestActor[i] + actor[i]; 
//     console.log(b);
// };

// let kart = ["Mario ", "Luigi ", "Peache "];
// kart.push('Browser');
// console.log(kart);



// let bonjour = test('aze aze');
// console.log(guessLetter('aazeaze'))

let tableMots = 'FRANCS FRANGE FRAPES FRAUDE FREAKS FREMIR FREONS FRITTE ABBAYE ABIMER ABOLIR ABOYER ESPION ETOILE EPOXYS EXODES EGAYER DURION DRUIDE DROGUE DOUALA DOUANE DORMIR DONJON DEALER DALLAS DEVISE CRYPTE CRIMES CRAYON COURGE CRAMPE CRANER CODAGE COLITE';

let tableLettres = tableMots.split(' ');

for (i=0 ; i < tableLettres.length; i++){
    tableLettres[i] = tableLettres[i].split('');
}

let pendu = tableLettres[Math.floor(Math.random()*tableLettres.length)]
let reponse = ['','','','','',''];
 

let guessLetter = function (l){
    let ilyaeuunchangement = false;
    for (let i = 0; i < pendu.length; i++) {
        if (l == pendu[i]){
            reponse[i] = pendu[i]; 
            ilyaeuunchangement = true;
        }
    }
    return ilyaeuunchangement
}

function verifTable(pendu, reponse){
    // si les deux tables sont les mêmes 
    for (i = 0; i < pendu.length; i++) {
        if (pendu[i] != reponse[i]){
            return false;
        }
    }
    return true; 
}

function test (pendu, reponse, check){
    let l = prompt('Devine une lettre du mot?');
    let penduString = pendu.join('');
    let jesaispas = guessLetter(l.toUpperCase()); 
    console.log(reponse);
    //Mettre la lettre   dans le tableau reponse à l'index i
    console.log(check);
    console.log(l);
    if(check > 9){
        let perduPerdu = 'Tu as perdu! Pendu ;-) Le mot était ' + penduString;
        console.log(perduPerdu);
        return perduPerdu
    }else if(verifTable(pendu, reponse)){
        let motSoluce = penduString + '! Tu as gagné';
        console.log(motSoluce);
        return  motSoluce 
    }else{
        if(!jesaispas){
            check ++
        }
        test(pendu, reponse, check);
    }
}


var state = test(pendu, reponse, 0);
document.write(state);