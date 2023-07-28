const menuContainer = document.querySelector('.menu-container');

export default function showHideMenu() {
    if (menuContainer.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden');
    } else if (!menuContainer.classList.contains('hidden')) {
        menuContainer.classList.add('hidden');
    }
}