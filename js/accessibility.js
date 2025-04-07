// Add keyboard accessibility to dropdown menus
document.querySelectorAll('.dropdown-button').forEach(button => {
    // Open dropdown on Enter or Space key
    button.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const dropdownContent = button.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                const isVisible = dropdownContent.style.display === 'block';
                dropdownContent.style.display = isVisible ? 'none' : 'block';
            }
        }
    });
});

// Add keyboard navigation within dropdowns
document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    const links = dropdown.querySelectorAll('a');
    links.forEach((link, index) => {
        link.addEventListener('keydown', event => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextLink = links[index + 1] || links[0];
                nextLink.focus();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevLink = links[index - 1] || links[links.length - 1];
                prevLink.focus();
            } else if (event.key === 'Escape') {
                dropdown.style.display = 'none';
                dropdown.previousElementSibling.focus(); // Focus back on the dropdown button
            }
        });
    });
});