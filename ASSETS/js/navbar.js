document.addEventListener("DOMContentLoaded", function () {
  fetch("INCLUDE/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
