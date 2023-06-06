// Function to set the cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get the cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();

    var userSelect = document.getElementById("user");
    var selectedUser = userSelect.value;

    if (selectedUser === "Rehan") {
        setCookie("redScreenCookie", "true", 365);
        showRedScreen();
        alert("your music taste trash bruh stop tryin")
    } else {
        window.location.href = "https://open.spotify.com/playlist/1VQXNTjhQoBsYnyVAfqhhH?si=zrbTwWhbQLO1WERixEI9hQ&pt=b800cd53b86a8d08de6ec3307229c92f";
    }
}

// Function to show the red screen
function showRedScreen() {
    var redScreen = document.getElementById("redScreen");
    redScreen.style.display = "block";
}

// Check if the cookie exists
window.onload = function () {
    var redScreenCookie = getCookie("redScreenCookie");
    if (redScreenCookie === "true") {
        showRedScreen();
    }
};

// Attach the form submission event handler
var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
