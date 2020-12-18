let input = "";
//Pour afficher dans le résultat
    function ShowValue(btn){  
    input += btn.value;
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }
//Pour faire le calcule et envoyer dans mon affichage le résulat
function quickMath(){
    console.log(eval(input));
    document.getElementById("output").innerHTML = eval(input);
}
//Tout supprimer
function Reset(btn){
   document.getElementById("output").innerHTML = "0";
   input = "";
}

