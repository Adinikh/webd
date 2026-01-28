function goPage(page) {

    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = page;
    }, 200); // wait before changing page
}

// Dark mode (if you added earlier)
function toggleDark() {
    document.body.classList.toggle("dark");
}
