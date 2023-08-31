function navigationHandler() {
    let more_btn = document.getElementById("more_btn");
    let nav_bar = document.getElementsByClassName("navigation")[0];
    let nav_menu = document.getElementsByClassName("nav_menu")[0];
    let close_nav = document.getElementsByClassName("close_nav")[0];
    more_btn.addEventListener("click", (e) => {
        nav_menu.classList.toggle("deactive_icon");
        close_nav.classList.toggle("deactive_icon");
        nav_bar.classList.toggle("active_nav");
    });
}
navigationHandler();
