// Circle follows mouse
const circle = document.getElementById('mouse-circle');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  // Adjusted to ensure the circle stays centered
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

// Add hover effect for circle
document.addEventListener('mouseover', () => {
  circle.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseout', () => {
  circle.style.transform = 'scale(1)';
});
