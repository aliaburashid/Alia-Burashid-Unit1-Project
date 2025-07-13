function selectCategory(element) {
  // Remove 'selected' from all
  document.querySelectorAll('.container').forEach(c => {
    c.classList.remove('selected');
  });

  // Add to clicked container
  element.classList.add('selected');

  // Show the levels section
  document.querySelector('.levels').style.display = 'block';
}

