document.getElementById("phone").addEventListener("click", function() {
  document.getElementById("register-form").setAttribute("class", "register-form-full");
  var phone = document.getElementById("phone");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  name.classList.remove("none");
  email.classList.remove("none");
  city.classList.remove("none");
});
