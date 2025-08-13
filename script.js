document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(c => io.observe(c));
});
