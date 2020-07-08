let storageBarPercentage = document.querySelector('.storage-bar--percentage');

window.onload = progressLoad();

function progressLoad() {
    setTimeout(function() {
        storageBarPercentage.style.width = '81.5%';
        storageBarPercentage.style.opacity = 1;
    }, 100);
}

