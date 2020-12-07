let nombre = (Math.trunc(Math.random() * 100));
console.log(nombre);
let liste = document.getElementById("liste");
let i = 10;
let reponse = document.getElementById("reponse");

function jeu() {
    let choix = document.getElementById("choix").value;

    if(isNaN(choix)) {
        reponse.innerHTML = "Ceci n'est pas un nombre";
    }

    else if(parseInt(choix) === nombre) {
        alert("vous avez trouvé");
        nombre = (Math.trunc(Math.random() * 100));
        console.log(nombre);
        while (liste.firstElementChild) {
            liste.removeChild(liste.firstElementChild);
        }
        i = 10;
        document.getElementById("titre").innerHTML = "Trouvez le chiffre compris entre 1 et 100 (10 essais)";
        reponse.innerHTML = "";
    }

    else if (i === 1){
        alert("vous avez perdu");
        nombre = (Math.trunc(Math.random() * 100));
        nombre = (Math.trunc(Math.random() * 100));
        while (liste.firstElementChild) {
            liste.removeChild(liste.firstElementChild);
        }
        i = 10;
        document.getElementById("titre").innerHTML = "Trouvez le chiffre compris entre 1 et 100 (10 essais)";
        reponse.innerHTML = "";
    }

    else {
        let erreur = document.createElement("p");
        erreur.innerHTML = choix;
        erreur.style.fontSize = "1.5rem";
        erreur.style.marginTop = "2%";
        document.getElementById("liste").appendChild(erreur);
        document.getElementById("titre").innerHTML = "Trouvez le chiffre compris entre 1 et 100 (" + (i - 1) + " essais)";
        i--;
        if (parseInt(choix) < nombre) {
            reponse.innerHTML = "C'est plus grand";
        }
        else {
            reponse.innerHTML = "C'est plus petit";
        }
    }
}

document.getElementById("valider").addEventListener("click", jeu);

function reset() {
    nombre = (Math.trunc(Math.random() * 100));
    console.log(nombre);
    while (liste.firstElementChild) {
        liste.removeChild(liste.firstElementChild);
    }
    i = 10;
    document.getElementById("titre").innerHTML = "Trouvez le chiffre compris entre 1 et 100 (10 essais)";
}

document.getElementById("newGame").addEventListener("click", reset);