const modal = document.querySelector(".modal");
const trigger = document.querySelector(".modal-trigger");
const closeButton = document.querySelector(".close-button");
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

/*
 * Accessibility features are below
*/
// JavaScript code to change the font style of the page
var change_font_style = 0;
function calibri_font() {
    document.body.style.fontFamily = "Calibri, sans-serif";
    document.body.style.fontSize = "1em";
    change_font_style == 1;
    savePreference("calibri-font-button", 1);
}
function verdana_font() {
    document.body.style.fontFamily = "Verdana, sans-serif";
    document.body.style.fontSize = "1em";
    change_font_style == 2;
    savePreference("verdana-font-button", 2);
}
function times_new_roman_font() {
    document.body.style.fontFamily = "Times New Roman, serif";
    document.body.style.fontSize = "1em";
    change_font_style == 3;
    savePreference("times-new-roman-font-button", 3);
}
function helvetica_font() {
    document.body.style.fontFamily = "Helvetica, sans-serif";
    document.body.style.fontSize = "1em";
    change_font_style == 4;
    savePreference("helvetica-font-button", 4);
}
function comic_sans_font() {
    document.body.style.fontFamily = "Comic Sans MS, Comic Sans";
    document.body.style.fontSize = "1em";
    change_font_style == 5;
    savePreference("comic-sans-font-button", 5);
}
function check_font_style() {
    const calibri = sessionStorage.getItem("calibri-font-button");
    const verdana = sessionStorage.getItem("verdana-font-button");
    const timesNewRoman = sessionStorage.getItem("times-new-roman-font-button");
    const helvetica = sessionStorage.getItem("helvetica-font-button");
    const comicSans = sessionStorage.getItem("comic-sans-font-button");

    if (calibri == 1) {
        calibri_font();
    } else if (verdana == 2) {
        verdana_font();
    } else if (timesNewRoman == 3) {
        times_new_roman_font();
    } else if (helvetica == 4) {
        helvetica_font();
    } else if (comicSans == 5) {
        comic_sans_font();
    } else {
        document.body.style.fontFamily = "Arial, sans-serif";
    }
}

// Call the function on page load
window.onload = check_font_style;

// Function that will reset the font style of the page and reload the page again
function reset_font_style() {
    change_font_style == 0;
    location.reload();
}

// JavaScript code to change the font size of the page
var change_font_size = 0;

function update_font_size(size) {
    document.body.style.fontSize = size;
    const dropdowns = document.querySelectorAll(".dropdown-content a");
    dropdowns.forEach(dropdown => {
        dropdown.style.fontSize = size;
    });
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(navLink => {
        navLink.style.fontSize = size;
    });
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    dropdownButtons.forEach(button => {
        button.style.fontSize = size;
    });
    const modalButtons = document.querySelectorAll(".modal-content button");
    modalButtons.forEach(button => {
        button.style.fontSize = size;
    });
}

function small_font() {
    update_font_size("0.8em");
    change_font_size == 1;
    savePreference("small-font-button", 1);
}
function medium_font() {
    update_font_size("1.2em");
    change_font_size == 2;
    savePreference("medium-font-button", 2);
}
function large_font() {
    update_font_size("1.5em");
    change_font_size == 3;
    savePreference("large-font-button", 3);
}
function check_font_size() {
    const small = sessionStorage.getItem("small-font-button");
    const medium = sessionStorage.getItem("medium-font-button");
    const large = sessionStorage.getItem("large-font-button");

    if (small == 1) {
        small_font();
    } else if (medium == 2) {
        medium_font();
    } else if (large == 3) {
        large_font();
    } else {
        document.body.style.fontSize = "1em";
        const dropdowns = document.querySelectorAll(".dropdown-content a");
        dropdowns.forEach(dropdown => {
            dropdown.style.fontSize = "1em";
        });
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(navLink => {
            navLink.style.fontSize = "1em";
        });
        const dropdownButtons = document.querySelectorAll(".dropdown-button");
        dropdownButtons.forEach(button => {
            button.style.fontSize = "1em";
        });
        const modalButtons = document.querySelectorAll(".modal-content button");
        modalButtons.forEach(button => {
            button.style.fontSize = "1em";
        });
    }
}

// Call the function on page load
window.onload = check_font_size;

// Function that will reset the font size of the page and reload the page again
function reset_font_size() {
    change_font_size == 0;
    location.reload();
}

// JavaScript code to change the colour scheme of the page
var change_colour_scheme = 0;
function dark_mode() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    change_colour_scheme == 1;
    savePreference("dark-mode-button", 1);

    // Update all links
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#fff";
    });

    document.querySelectorAll("dropdown-button").forEach(link => {
        link.style.color = "#fff"; // Black text for visibility
    });
    document.querySelectorAll("nav a").forEach(link => {
        link.style.color = "#fff"; // Black text for visibility
    });
    document.querySelectorAll(".dropdown-button").forEach(link => {
        link.style.color = "#fff"; // Black text for visibility
    });

    // Update dropdown links and background
    document.querySelectorAll(".dropdown-content a").forEach(dropdown => {
        dropdown.style.color = "#000"; // Black text for contrast
        dropdown.style.backgroundColor = "#fff"; // White background
    });

    // Update dropdown container background
    document.querySelectorAll(".dropdown-content").forEach(dropdown => {
        dropdown.style.backgroundColor = "#fff";
    });

    // Update hamburger icon for dark mode
    const hamburger = document.querySelector(".nav-toggle");
    if (hamburger) {
        hamburger.style.color = "#fff"; // White icon for visibility
    }

    // Update form styles for dark mode
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.style.backgroundColor = "#000";
        form.style.color = "#fff";
        form.style.border = "1px solid #fff";
    });

    // Update labels, textareas, and inputs for dark mode
    document.querySelectorAll("label").forEach(label => {
        label.style.color = "#fff";
    });
    document.querySelectorAll("textarea, input").forEach(input => {
        input.style.backgroundColor = "#333";
        input.style.color = "#fff";
        input.style.border = "1px solid #fff";
    });
}

function light_mode() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    change_colour_scheme == 2;
    savePreference("light-mode-button", 2);

    // Update all links (including nav links)
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#000000"; // Black text for visibility
    });

    document.querySelectorAll("dropdown-button").forEach(link => {
        link.style.color = "#000000"; // Black text for visibility
    });
    document.querySelectorAll("nav a").forEach(link => {
        link.style.color = "#000"; // Black text for visibility
    });
    document.querySelectorAll(".dropdown-button").forEach(link => {
        link.style.color = "#000"; // Black text for visibility
    });

    // Update dropdown links and background
    document.querySelectorAll(".dropdown-content a").forEach(dropdown => {
        dropdown.style.color = "#000"; // Black text for visibility
        dropdown.style.backgroundColor = "#f0f0f0"; // Light gray background for contrast
    });

    // Update dropdown container background
    document.querySelectorAll(".dropdown-content").forEach(dropdown => {
        dropdown.style.backgroundColor = "#f0f0f0"; // Light gray background
    });

    // Update hamburger icon for light mode
    const hamburger = document.querySelector(".nav-toggle");
    if (hamburger) {
        hamburger.style.color = "#000"; // Black icon for visibility
    }

    // Update form styles for light mode
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.style.backgroundColor = "#fff";
        form.style.color = "#000";
        form.style.border = "1px solid #000";
    });

    // Update labels, textareas, and inputs for light mode
    document.querySelectorAll("label").forEach(label => {
        label.style.color = "#000";
    });
    document.querySelectorAll("textarea, input").forEach(input => {
        input.style.backgroundColor = "#fff";
        input.style.color = "#000";
        input.style.border = "1px solid #000";
    });
}

function check_colour_scheme() {
    const dark = sessionStorage.getItem("dark-mode-button");
    const light = sessionStorage.getItem("light-mode-button");

    if (dark == 1) {
        dark_mode();
    } else if (light == 2) {
        light_mode();
    } else {
        document.body.style.backgroundColor = "#4f4f4f";
        document.body.style.color = "#fff";
    }
}

// Call the function on page load
window.onload = check_colour_scheme;

// Function that will reset the colour scheme of the page and reload the page again
function reset_colour_scheme() {
    change_colour_scheme == 0;
    location.reload();
}

// Utility function to save preferences only if cookies are not declined
function savePreference(key, value) {
    if (!window.areCookiesDeclined()) {
        sessionStorage.setItem(key, value);
    }
}