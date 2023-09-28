window.onload = () => {
    const navLink = document.querySelector('.nav-links');
    const shareLink = document.querySelector('.btn-links');
    shareLink.addEventListener('click', () => {
        const action = shareLink.dataset.action;
        navLink.classList.toggle('hide', action !== 'open');
        if (action === 'open') {
            shareLink.dataset.action = 'close';
            shareLink.innerHTML = 'X';
        } else {
            shareLink.dataset.action = 'open';
            shareLink.innerHTML = '+';
        }
    });
};