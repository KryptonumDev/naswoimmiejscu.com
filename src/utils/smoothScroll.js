export const smoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
  window.history.pushState(null, '', targetId);
}