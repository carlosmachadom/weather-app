import { hideLoading } from "@utils/load-modal";
const errorText = document.querySelector('.input--error');

function showTextError() {
    if (errorText.classList.contains('hidden')) {
        errorText.classList.remove('hidden');
        hideLoading();
    }
}

function hideTextError() {
    if (!errorText.classList.contains('hidden')) {
        errorText.classList.add('hidden');
    }
}

export {
    showTextError,
    hideTextError
}