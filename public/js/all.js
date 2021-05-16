const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.getElementById('sidebar');
const userPopout = document.getElementById('profile-popout');
const userImage = document.getElementById('user-menu-button');




// closeMenu.addEventListener("click", function(){
//     mobileMenu.classList.add('hidden')
// })


// sideBar.addEventListener("click", function(){
//     mobileMenu.classList.remove('hidden')
// })

userImage.addEventListener("click", function(){
    userPopout.classList.toggle('hidden')
})
