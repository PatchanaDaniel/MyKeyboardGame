

function afficherResultat(score, nbMotsProposes) {
    let setScore= ` ${score}/${nbMotsProposes}
    `
    let zoneScore=document.querySelector(".zoneScore span")
    zoneScore.innerHTML=setScore
}

function afficherProposition(word){
  let zonep=document.querySelector('.zoneProposition')  
  zonep.textContent=word

}
function afficherEmail(nom,num, score) {
    
    let msgto = ` https://wa.me/${num}?text=Partage du score Azertype
    Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = msgto
   
}
function afficherMessageErr(mEr){
    let span=document.createElement('span')
    span.textContent=`${mEr}`
    let popup=document.querySelector(".popup")
    popup.appendChild(span)

}
function validerNom(nom){
    nom=nom.trim()
    if ( nom.length<=2){
        throw new Error("le nom est tros court");
    }

} 
/*function validerEmail(email){
   let regex= new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!regex.test(email)){
        throw new Error("l'e-mail n'est pas valide")
        
    }}*/
 // affiche la valeur du radio cochélet form=document.querySelector("form")
function gererFormulaire(message){
 let form=document.querySelector("form")
 form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let n=document.getElementById('nom')
    let e=document.getElementById('num')
    let nom=n.value
    let email=e.value
    
    try {
        validerNom(nom)
        //validerEmail(email)
        afficherEmail(nom,email,message)
    }
    catch(erreur){ console.log(erreur)
    afficherMessageErr(erreur)}
  
    
})}

function lancerJeu() {
    // Initialisations
   //choisirPhrasesOuMots()
    initAddEventListenerPopup()
    let ok=false
    let score = 0
    let nbMotsProposes = 0
    let i=0
    let theInput=document.getElementById('inputEcriture')
    let my_button=document.getElementById("btnValiderMot")
    let mypart=document.getElementById('part')
    console.log(mypart.textContent)
    let listeMots=listeMots0
    let listePhrases=listePhrases0
    let listePropositions=listeMots
    var A=0;

    afficherProposition(listePropositions[i])
    my_button.addEventListener("click",()=>{
        if (ok){
            window.location.reload();
         }
          
        if (theInput.value==listePropositions[i]){
            score++
        }
    theInput.value=''
    nbMotsProposes++
    i++
    afficherResultat(score, nbMotsProposes)
    let a;
    let b;
    a=listePropositions.length
    b=listePropositions.length
    
  
    if (i>=a&& score<nbMotsProposes){
        afficherProposition("le jeu est fini ")
        ok=true
        

        
    }
    else if (i>=a &&nbMotsProposes===b){
        b+=3
        i=0
        ++A;
        mypart.setAttribute("value",`part${A+1}`)
        my_button.disabled=false
        switch(A){
            case 1:
                
                listeMots=listeMots1
                listePhrases=listePhrases1
                listePropositions=listeMots
                break;
            case 2:
              break;
            

        }
        afficherProposition(listePropositions[i])

    }

    else{
       afficherProposition(listePropositions[i])
     }
    
       })
    // On détermine la liste des mots ou des phrases à proposer à l'utilisateur


   
    let zoneO=document.querySelectorAll('input[type="radio"]')
    console.log(zoneO)

    for (let c=0;c<zoneO.length;c++){
zoneO[c].addEventListener("change",(event)=>{
    if (event.target.value==="1"){
        listePropositions=listeMots
    }
 else{
    listePropositions=listePhrases
 }
 afficherProposition(listePropositions[i])
});
}
let message=`${score}/${nbMotsProposes}`
gererFormulaire(message)

theInput.addEventListener("paste",(e) => {
    e.preventDefault()
})

 afficherResultat(score,nbMotsProposes)
}

