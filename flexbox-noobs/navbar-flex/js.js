const menu = document.querySelector('.toggleNav');
const navbar = document.querySelector('.flex-nav ul');
let show = true;
menu.addEventListener('click', function(){
   if(show){
       navbar.style.display = "flex" ;
   }
   else
   {navbar.style.display = "none" ; }
   show = !show ;
});