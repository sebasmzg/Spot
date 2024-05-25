
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const loadingVideo = document.getElementById('loading-video');

    loadingVideo.onended = function() {
        loadingScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    };

    setTimeout(() => {
        if (!loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }
    }, 5000); // 5 segundos de tiempo de carga máximo
});
