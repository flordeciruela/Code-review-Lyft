var scrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > scrollTop){
     document.getElementById("nav-header").setAttribute("class","white-bg");
     document.getElementById("logo").setAttribute("class", "logo-pink");
   }
   if(currentScroll < = 3){
    document.getElementById("nav-header").setAttribute("class","transparent-bg");
    document.getElementById("logo").setAttribute("class", "logo-white");
   }
   scrollTop = currentScroll;
}, false);
