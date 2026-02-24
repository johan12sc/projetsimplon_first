// pour le champ de couleur 
        // Sélection des éléments
        const inputCouleur = document.getElementById("couleur");
        const bouton = document.getElementById("btn");
        // Événement clic
        bouton.addEventListener("click", function() {
            let valeur = inputCouleur.value;

            if (valeur === "") {
                alert("Veuillez entrer une couleur !");
                return;
            }

            // Changer la couleur du fond
            document.body.style.backgroundColor = valeur;
        });

        // pour les messages qui s'affiche
         function show(){
            document.getElementById("texte").innerHTML = "Le groupe Simplon_First vous presente leur projet sur le DOM en javascript"; 
        }
        function hide(){
            document.getElementById("texte").innerHTML = " ";
        }


        // pour la verification du mot de passe

        const motDePass = document.getElementById("password");
const msgError = document.querySelector(".msg-error");
const msgSuccess = document.querySelector(".msg-success");
const btnToggleCacher =document.querySelector("#cacher-mdp-btn");
const btnVerifier =document.querySelector("#check-mdp-btn");


btnToggleCacher.addEventListener("click",()=>{

    if (motDePass.type === "password"){
        motDePass.type = "text"
        btnToggleCacher.textContent = "Cacher"

    }else{
        motDePass.type = "password"
        btnToggleCacher.textContent = "Afficher"
    }
});


btnVerifier.addEventListener("click",()=>{
    const ValeurMotDePass = motDePass.value;
    if(!ValeurMotDePass || ValeurMotDePass.length < 8){
        msgError.classList.remove("hide")
        msgError.classList.add("error")
        msgSuccess.classList.remove("success")
        msgSuccess.classList.add("hide")
    }else{
        msgSuccess.classList.remove("hide")
        msgSuccess.classList.add("success")
        msgError.classList.add("hide")
        msgError.classList.remove("error")
    }
}); 
    