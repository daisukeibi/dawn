const SCROLL_TRIGGER_CLASSNAME = "scroll-trigger";
const IN_VIEW_CLASSNAME = "scrolled-into-view";

const OPTIONS = {
  threshold: 0.5,
};

function onIntersection(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add(IN_VIEW_CLASSNAME);
      element.style = `--animation-order: ${index};`
      observer.unobserve(element);
    }
  })
}

function initializeScrollTrigger() {
  const scrollTriggerElements = Array.from(
    document.getElementsByClassName(SCROLL_TRIGGER_CLASSNAME)
  );

  if (scrollTriggerElements.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(onIntersection, OPTIONS);

  scrollTriggerElements.forEach((element) => observer.observe(element));
}

addEventListener('DOMContentLoaded', () => initializeScrollTrigger());
