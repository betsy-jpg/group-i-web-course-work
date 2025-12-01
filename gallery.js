
<!-- JavaScript -->
  <script>
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        // Toggle the "active" class
        img.classList.toggle('active');
      });
    });
  </script>


