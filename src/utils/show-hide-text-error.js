const errorText = document.querySelector('.input--error');

function showTextError() {
    if (errorText.classList.contains('hidden')) {
        errorText.classList.remove('hidden');
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