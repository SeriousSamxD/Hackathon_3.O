var settings_menu = document.querySelector(".profile-setting");
function settingsMenuToggle(){
    settings_menu.classList.toggle("profile-setting-height")
}

var dark_btn = document.querySelector(".check");

dark_btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
}