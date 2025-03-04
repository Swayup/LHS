document.addEventListener("DOMContentLoaded", function () {
  fetch("INCLUDE/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
