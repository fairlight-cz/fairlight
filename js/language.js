(function () {
    // Detect language from URL or browser
    const currentUrl = window.location.pathname;
    const browserLangs = navigator.languages || [navigator.language];
    let lang = 'en'; // default

    // Detect from URL first
    if (currentUrl.includes('-cs')) lang = 'cs';
    else if (currentUrl.includes('-en')) lang = 'en';
    else {
        // Detect from browser prefs
        const isCzech = browserLangs.some(l => l.toLowerCase().startsWith('cs'));
        lang = isCzech ? 'cs' : 'en';
    }

    // Update dropdown text
    const langDropdown = document.getElementById('langDropdown');
    langDropdown.textContent = lang === 'cs' ? 'Čeština' : 'English';

    // Set correct links for language switcher
    document.querySelectorAll('.lang-option').forEach(option => {
        const newLang = option.dataset.lang;
        option.addEventListener('click', e => {
            e.preventDefault();
            let targetUrl = currentUrl;
            // Swap language code in file name
            if (newLang === 'cs') {
                targetUrl = targetUrl.replace('-en', '-cs');
                if (!targetUrl.includes('-cs')) targetUrl = targetUrl.replace('.html', '-cs.html');
            } else {
                targetUrl = targetUrl.replace('-cs', '-en');
                if (!targetUrl.includes('-en')) targetUrl = targetUrl.replace('.html', '-en.html');
            }
            window.location.href = targetUrl;
        });
    });
})();
