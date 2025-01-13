// Circle follows mouse and centers the pointer in the circle
const circle = document.getElementById('mouse-circle');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  // Offset by half of the circle's width and height to keep the pointer in the center
  circle.style.left = `${x - 25}px`; // 50px / 2
  circle.style.top = `${y - 25}px`; // 50px / 2
});

// Add hover effect for circle
document.addEventListener('mouseover', () => {
  circle.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseout', () => {
  circle.style.transform = 'scale(1)';
});

// Update scroll progress
const scrollIndicator = document.getElementById('scroll-indicator');
const scrollProgress = document.createElement('div');
scrollProgress.id = 'scroll-progress';
scrollIndicator.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / scrollHeight) * 100;

  scrollProgress.style.height = `${scrollPercentage}%`;
});
