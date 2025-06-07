document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Pronto te responderemos.");
  this.reset();
});
