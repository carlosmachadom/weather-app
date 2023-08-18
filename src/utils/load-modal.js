let loadingModal = document.querySelector('.loading-modal');

const hideLoading = () => {
    if (!loadingModal.classList.contains('hidden')) {
        loadingModal.classList.add('hidden');
    }
}

const setLoading = () => {
    if (loadingModal.classList.contains('hidden')) {
        loadingModal.classList.remove('hidden');
    } else if (!loadingModal.classList.contains('hidden')) {
        loadingModal.classList.add('hidden');
    }
}

export { setLoading, hideLoading }