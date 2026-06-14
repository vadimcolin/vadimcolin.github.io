// Menu mobile : ouvrir/fermer
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

// Marquer le lien de la page courante comme actif.
// On compare uniquement le nom du fichier (dernier segment de l'URL),
// ce qui fonctionne même si les pages sont dans des dossiers différents.
const current = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav__links a").forEach((link) => {
  const target = link.getAttribute("href").split("/").pop();
  if (target === current) {
    link.classList.add("active");
  }
});
