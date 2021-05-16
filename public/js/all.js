const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.getElementById('sidebar');
const userPopout = document.getElementById('profile-popout');
const userImage = document.getElementById('user-menu-button');

userImage.addEventListener("click", function(){
    userPopout.classList.toggle('hidden')
})
