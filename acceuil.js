function requiredElement() {
var nom = document.getElementById("Nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;

if(nom=="") {
alert("Veillez insérer votre Nom");
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
//nom.focus();
return false;
}
else if(prenom=="") {
alert("Veillez insérer votre Prénom");
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
else if(email=="") {
alert("Veillez insérer votre Email");
document.getElementById("email").style.backgroundColor="red";
document.getElementById("email").focus();
return false;
}
else{
	return true;
}
}
function nomValidate() { 

var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("Nom");
if(nom.value.match(letters)) {
document.getElementById("Nom").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("Nom").style.backgroundColor="red";
document.getElementById("Nom").focus();
return false;
}
}
function prenomValidate() { 

var letters = /^[A-Za-z]+$/;
var prenom = document.getElementById("prenom");
if(prenom.value.match(letters)) {
document.getElementById("prenom").style.backgroundColor="white";
return true;
} else {
alert('Le prenom ne doit contenir que des lettres');
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
}
function validateEmail(){
var champsText = document.getElementById("email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
 return true;
}else{
alert("Veuillez insérer une adresse email valide!");
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus();
return false;
}
}
function validateForm(){
	var test =0;
	var checkChamp = requiredElement();
	var a = nomValidate();
    var b=prenomValidate();
    var c = validateEmail();
    if(checkChamp & a & b & c){
    	console.log("salut tout le monde");
		test =confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
	}
	if(test)	return true;
	else	return false;
}