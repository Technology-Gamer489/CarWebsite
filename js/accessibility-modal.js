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