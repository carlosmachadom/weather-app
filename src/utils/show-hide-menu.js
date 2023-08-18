import { hideTextError } from "@utils/show-hide-text-error";
const menuContainer = document.querySelector('.menu-container');
const dayStatusContainer = document.querySelector('.day-status-container');

export default function showHideMenu() {
    if (menuContainer.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden');
        dayStatusContainer.classList.add('hidden');
    } else if (!menuContainer.classList.contains('hidden')) {
        menuContainer.classList.add('hidden');
        dayStatusContainer.classList.remove('hidden');
        hideTextError();
    }
}