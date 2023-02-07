function toggleAccordion() {
  const e = document.querySelector(".act-accordion__section");
  if (e.classList.contains("act-accordion__section__open")) {
    e.classList.remove("act-accordion__section__open");
    e.classList.add("act-accordion__section__closed");
  } else {
    e.classList.remove("act-accordion__section__closed");
    e.classList.add("act-accordion__section__open");
  }
}
