window.addEventListener("scroll", function() {
  const footer = document.querySelector(".page-footer");
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 5) {
    footer.style.display = "block";  // show when bottom reached
  } else {
    footer.style.display = "none";   // hide when scrolling up
  }
});
