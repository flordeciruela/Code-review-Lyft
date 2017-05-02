document.getElementById("phone").addEventListener("click", function() {
  document.getElementById("register-form").setAttribute("class", "register-form-full");
  document.getElementById("name").classList.remove("none");
  document.getElementById("email").classList.remove("none");
  document.getElementById("city").classList.remove("none");
});

var phone = document.getElementById("phone");
phone.addEventListener("blur", function() {
  if (phone.value == null || phone.value.length == 0 || ( !(/^\d{9}$/.test(phone.value) )) ) {
    document.getElementById("phone-field").classList.add("incorrect");
  }  else {
    document.getElementById("phone-field").classList.remove("incorrect");
  }
});

var userName = document.getElementById("name");
userName.addEventListener("blur", function() {
  if (userName.value == null || userName.value.length == 0 ) {
    document.getElementById("name-field").classList.add("incorrect");
  }  else {
    document.getElementById("name-field").classList.remove("incorrect");
  }
});

var email = document.getElementById("email");
email.addEventListener("blur", function() {
  if (email.value == null || email.value.length == 0 || ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) ) {
    document.getElementById("email-field").classList.add("incorrect");
  }  else {
    document.getElementById("email-field").classList.remove("incorrect");
  }
});

var city = document.getElementById("city");
city.addEventListener("blur", function() {
  if (city.value == null || city.value.length == 0 ) {
    document.getElementById("city-field").classList.add("incorrect");
  }  else {
    document.getElementById("city-field").classList.remove("incorrect");
  }
});
