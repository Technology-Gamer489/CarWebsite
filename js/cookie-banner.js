document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');

    // Check if cookies have already been accepted or declined
    if (localStorage.getItem('cookiesAccepted') || localStorage.getItem('cookiesDeclined')) {
        cookieBanner.style.display = 'none';
    }

    // Handle "Accept" button click
    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    // Handle "Decline" button click
    declineCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesDeclined', 'true');
        cookieBanner.style.display = 'none';
    });

    // Utility function to check if cookies are declined
    window.areCookiesDeclined = () => {
        return localStorage.getItem('cookiesDeclined') === 'true';
    };
});