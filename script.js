// Circle follows mouse
const circle = document.getElementById('mouse-circle');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

// Center circle around pointer and scale it when mouse is over the page
document.addEventListener('mouseover', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(1.2)';
});

document.addEventListener('mouseout', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Highlight active nav link (only applies to links with `.nav-links a`)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
