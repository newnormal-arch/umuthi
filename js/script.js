// DROPDOWN MENU
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", (e) => {
    dropDownMenu.classList.toggle("open");

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
})