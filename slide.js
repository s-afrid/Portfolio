const scrollBox = document.getElementById("slide");

function scrollLeft1() {
      scrollBox.scrollBy({ left: -800, behavior: "smooth" });
    }

function scrollRight() {
      scrollBox.scrollBy({ left: 800, behavior: "smooth" });
    }