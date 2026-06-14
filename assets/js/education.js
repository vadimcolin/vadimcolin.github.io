// ===== Carrousel des projets académiques =====
// Un seul projet visible à la fois, navigation par flèches (et points).
(function () {
  const carousel = document.querySelector("#projects");
  if (!carousel) return;

  const projects = Array.from(carousel.querySelectorAll(".project"));
  const prevBtn = carousel.querySelector(".carousel__arrow--prev");
  const nextBtn = carousel.querySelector(".carousel__arrow--next");
  const dotsContainer = document.querySelector(".carousel__dots");

  let index = projects.findIndex((p) => p.classList.contains("is-active"));
  if (index < 0) index = 0;

  // Construire les points indicateurs (un par projet)
  const dots = projects.map((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", "Go to project " + (i + 1));
    dot.addEventListener("click", () => show(i));
    dotsContainer && dotsContainer.appendChild(dot);
    return dot;
  });

  function show(newIndex) {
    // Boucle : revient au début/fin
    index = (newIndex + projects.length) % projects.length;
    projects.forEach((p, i) => p.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  prevBtn && prevBtn.addEventListener("click", () => show(index - 1));
  nextBtn && nextBtn.addEventListener("click", () => show(index + 1));

  show(index); // état initial (synchronise les points)
})();
