function showTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tab-content");
    var tabbuttons = document.getElementsByClassName("tab-button");

    // Hide all tab contents
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab buttons
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Show the selected tab and add active class to its button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set the first tab to display by default
document.getElementById("contacts").style.display = "block";
document.querySelector(".tab-button").classList.add("active");
