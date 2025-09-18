function toggleMenu() {
        let navlinks = document.getElementById("navlinks");

        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
        } else {
            navlinks.style.display = "block";
        }
    }