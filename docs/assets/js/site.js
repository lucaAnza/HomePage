document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll(".skill-track").forEach((track) => {
    const level = Number(track.dataset.level || 0);

    for (let index = 0; index < 5; index += 1) {
      const segment = document.createElement("span");
      if (index < level) {
        segment.classList.add("is-filled");
      }
      track.appendChild(segment);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 65, 390)}ms`;
    observer.observe(element);
  });
});
