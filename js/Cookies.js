function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to handle cookie acceptance
function acceptCookies() {
    setCookie("cookies_accepted", "true", 365);
    document.getElementById("cookie-banner").style.display = "none";
}

// Check if the user has already accepted cookies
window.onload = function() {
    var cookiesAccepted = document.cookie.indexOf("cookies_accepted") !== -1;
    if (cookiesAccepted) {
        document.getElementById("cookie-banner").style.display = "none";
    }
};

// Function to scroll to the cookie banner section
function showCookieBanner() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "block";
    cookieBanner.scrollIntoView({ behavior: "smooth" });
}