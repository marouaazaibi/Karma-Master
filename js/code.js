
//this function allows to calculate average
//Function Declaration
function moyenne(math, phy, info) {
    return (math * 2 + phy * 3 + info * 4) / 9;
}

// Call Function 
var marwaMoy = moyenne(12, 16, 19);
alert(marwaMoy);

/////////////This function allows to calculate the Pric TTC
function TTC(Nb, Price, TVA) {
    return (Nb * Price) * (1 + TVA / 100);
}
var facture = TTC(10, 15, 19);
alert(facture);
/////////////This function allows to calculate the average in a table
var notes = [12, 15, 18, 19, 3];
function moyenneTableau(T) {
    var total = 0;
    for (let i = 0; i < T.length; i++) {
        total = total + T[i];
    }
    return (total / T.length);
}
var moyenneTab = moyenneTableau(notes);

alert(moyenneTab);

////////////This function allows to calculate a produit in a table
function produits(T) {

    var pr = 1;
    for (let i = 0; i < T.length; i++) {
        pr = pr * T[i];

    }
    return pr;
}
//////////////This function allows to check a  Average Table

function verifMoyenneTableau(T) {
    if (moyenneTableau(T) < 10) {
        // alert('Insuffisant');
    } else {
        // alert('Suffisant') ;
    }
}
verifMoyenneTableau(notes)
////////////This function allowq to check a mention of a student
function mention(math, phy, info) {
    var moy = moyenne(math, phy, info);
    if (moy < 5) {
        alert('Trop faible');
    } else if (moy < 10 && moy >= 5) {
        alert('Faible');
    } else if (moy < 12 && moy >= 10) {
        alert('Moyen');
    } else if (moy < 15 && moy >= 12) {
        alert('Assez Bien');
    } else if (moy < 17 && moy >= 15) {
        alert('Bien');
    } else {
        alert('Tres bien');
    }
}
mention(13, 16, 19);

//////////function that displays the largest element of an array
var T = [2, 8, 16, 9, 4];
function maximumTableau(T) {
    var Max = i;
    for (var i = 0; i < T.length; i++) {
        if (T[i + 1] > T[i]) {
            Max = T[i + 1];
        }
    }   return Max;
}

alert(maximumTableau(T));
/////////////This function allows to calculate the sum of the negative elements of an arra
var T1 = [-2, -8, 16, 9, -4];
function sommeNegative(t) {
    var SN = 0;
    for (var i = 0; i < t.length; i++) {

        if ((t[i] < 0)) {

            SN = SN + t[i];
        }
    }
    return SN;
}
///////////// This function qui permet de renverser une chaine de caractère
function reverseString(ch) {

    var result = '';

    for (var i = 0; i < ch.length; i++) {
        result = ch[i] + result;
    }
 return result;
}
///////////// This function allows to check the parity of number
function pairImpair(T) {
var p = 0;
for (var i = 0; i < T.length; i++) {
        if (T[i] % 2 === 0) {
p = p + 1;
        }

    }
    alert('le nombre des element pairs:' + p);
    alert('le nombre des element impairs:' + (T.length - p));
}
pairImpair([2, 16, 17, 3, 18, 6, 11]);