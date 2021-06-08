(() => {
    const menu = document.body.querySelectorAll(".menu__link");
    for (let i = 0; i < menu.length; i++) {
        menu[i].onclick = myFunction;
    }
    function myFunction() {
        this.preventDefault.onclick = function() {
            return false;
        }
        if (this.nextElementSibling.className === 'menu menu_sub menu_active') {
            this.nextElementSibling.classList.remove("menu_active");
        } else {
            this.nextElementSibling.classList.add("menu_active");
        }
    };
})();
