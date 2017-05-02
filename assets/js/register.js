document.getElementById("phone").addEventListener("click", function() {
  document.getElementById("register-form").setAttribute("class", "register-form-full");
  document.getElementById("name").classList.remove("none");
  document.getElementById("email").classList.remove("none");
  document.getElementById("city").classList.remove("none");
});

var phone = document.getElementById("phone");
phone.addEventListener("blur", function() {
  if (phone.value.length == 0) {
    document.getElementById("phone-field").setAttribute("class", "incorrect");
  }
})
