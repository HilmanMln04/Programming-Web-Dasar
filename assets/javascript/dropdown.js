var menuDropdown = document.querySelectorAll(".dropdown");
for (var x=0; x<menuDropdown.length; x++) {
    menuDropdown[x].onclick = function() {
        var subMenu = this.parentNode.getElementsByClassName("sub-menu")[0];
        if (subMenu.classList.contains('selected')) {
            subMenu.classList.remove("selected");
        } else {
            subMenu.classList.add("selected");
        }
    }
}