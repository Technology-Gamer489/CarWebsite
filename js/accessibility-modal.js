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
    sessionStorage.setItem("calibri-font-button", change_font_style);
}
function verdana_font() {
    document.body.style.fontFamily = "Verdana, sans-serif";
    document.body.style.fontSize = "1em";
    change_font_style == 2;
    sessionStorage.setItem("verdana-font-button", change_font_style);
}
function times_new_roman_font() {
    document.body.style.fontFamily = "Times New Roman, serif";
    document.body.style.fontSize = "1em";
    change_font_style == 3;
    sessionStorage.setItem("times-new-roman-font-button", change_font_style);
}
function helvetica_font() {
    document.body.style.fontFamily = "Helvetica, sans-serif";
    document.body.style.fontSize = "1em";
    change_font_style == 4;
    sessionStorage.setItem("helvetica-font-button", change_font_style);
}
function comic_sans_font() {
    document.body.style.fontFamily = "Comic Sans MS, Comic Sans";
    document.body.style.fontSize = "1em";
    change_font_style == 5;
    sessionStorage.setItem("comic-sans-font-button", change_font_style);
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
    sessionStorage.setItem("small-font-button", change_font_size);
}
function medium_font() {
    update_font_size("1.2em");
    change_font_size == 2;
    sessionStorage.setItem("medium-font-button", change_font_size);
}
function large_font() {
    update_font_size("1.5em");
    change_font_size == 3;
    sessionStorage.setItem("large-font-button", change_font_size);
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
    sessionStorage.setItem("dark-mode-button", change_colour_scheme);
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#fff";
    });
    document.querySelectorAll(".dropdown-content a").forEach(dropdown => {
        dropdown.style.color = "#000";
    });
    document.querySelectorAll(".dropdown-content").forEach(dropdown => {
        dropdown.style.backgroundColor = "#fff";
    });
}
function light_mode() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    change_colour_scheme == 2;
    sessionStorage.setItem("light-mode-button", change_colour_scheme);
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#000";
    });
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
        dropdownButtons.forEach(button => {
            button.style.color = "#000";
        });
    document.querySelectorAll(".dropdown-content a").forEach(dropdown => {
        dropdown.style.color = "#000";
    });
    document.querySelectorAll(".dropdown-content").forEach(dropdown => {
        dropdown.style.backgroundColor = "#fff";
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