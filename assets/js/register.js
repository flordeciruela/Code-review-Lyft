//declaracion de variables
var input = document.getElementsByTagName('input');
var phone = input[0];
var userName = input[1];
var email = input[2];
var city = input[3];

//Mostrar inputs al clickear phone
phone.addEventListener("click", function() {
  document.getElementById("register-form").setAttribute("class", "register-form-full");
  for (var i = 1; i < input.length; i++) {
    input[i].classList.remove("none");
  }
  document.getElementById("sign-up").classList.remove("margin-top");
  document.getElementsByClassName("div-transparent")[0].classList.add("bottom-position");
  phone.onkeypress = soloNumeros;
});

//Primera letra mayuscula nombre
function firstUpperCase() {
  var id = document.getElementById(this.id);
  var newValue = id.value.charAt(0).toUpperCase() + id.value.substring(1).toLowerCase();
  document.getElementById(this.id).value = newValue;
}
//Valida solo numeros
var soloNumeros = function(e){
  var codigoTecla = e.keyCode;
  var longitud = this.value.length;
  if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=8){
    return true;
  }else{
    return false;
  }
}
//Valida solo letras
var soloLetras = function (e){
  var codigoTecla = e.keyCode;
  var longitud = this.value.length;
  if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=8){
    return false;
  }else{
    return true;
  }
}

userName.addEventListener("keyup", firstUpperCase);
city.addEventListener("keyup", firstUpperCase);
userName.addEventListener("click", function () {
  this.onkeypress = soloLetras;
});
city.addEventListener("click", function () {
  this.onkeypress = soloLetras;
});

//Mostrar/ocultar validación cuando input pierde el foco
phone.addEventListener("blur", function() {
  if (phone.value == null || phone.value.length == 0 || ( !(/^\d{9}$/.test(phone.value) )) ) {
    document.getElementById("phone-field").classList.add("incorrect");
  }  else {
    document.getElementById("phone-field").classList.remove("incorrect");
  }
});

userName.addEventListener("blur", function() {
  if (userName.value == null || userName.value.length == 0 ) {
    addIncorrect(this.parentNode);
  }  else {
    removeIncorrect(this.parentNode);
  }
});

email.addEventListener("blur", function() {
  if (email.value == null || email.value.length == 0 || ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) ) {
    addIncorrect(this.parentNode);
  }  else {
    removeIncorrect(this.parentNode);
  }
});
function addIncorrect(input) {
  input.classList.add("incorrect");
}
function removeIncorrect(input) {
  input.classList.remove("incorrect");
}

city.addEventListener("blur", function() {
  if (city.value == null || city.value.length == 0 ) {
    addIncorrect(this.parentNode);
  }  else {
    removeIncorrect(this.parentNode);
  }
});

//validacioón con botón
document.getElementById("submit").addEventListener("click", function() {

    if (phone.value == null || phone.value.length == 0 || ( !(/^\d{9}$/.test(phone.value) )) ) {
      addIncorrect(this.parentNode);
    }  else {
      removeIncorrect(this.parentNode);
    }

    if (userName.value == null || userName.value.length == 0 ) {
      addIncorrect(this.parentNode);
    }  else {
      removeIncorrect(this.parentNode);
    }

    if (email.value == null || email.value.length == 0 || ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) ) {
      addIncorrect(this.parentNode);
    }  else {
      removeIncorrect(this.parentNode);
    }

    if (city.value == null || city.value.length == 0 ) {
      addIncorrect(this.parentNode);
    }  else {
      removeIncorrect(this.parentNode);
    }
});
