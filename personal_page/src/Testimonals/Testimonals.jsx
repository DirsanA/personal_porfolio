document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider ul li"); // Get all slides
  const nextBtn = document.querySelector(".next-btn");
  const backBtn = document.querySelector(".back-btn");
  let currentIndex = 0; // Start with the first slide

  function showSlide(index) {
    // Prevent index out of bounds
    if (index < 0) {
      currentIndex = slides.length - 1; // Go to the last slide
    } else if (index >= slides.length) {
      currentIndex = 0; // Go back to the first slide
    } else {
      currentIndex = index;
    }

    // Calculate the transform value to slide to the correct position
    const offset = -currentIndex * 100; // Move by 100% per slide
    document.querySelector(
      ".slider ul"
    ).style.transform = `translateX(${offset}%)`;
  }

  // Next button click
  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1); // Move to the next slide
  });

  // Previous button click
  backBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1); // Move to the previous slide
  });

  // Show the first slide initially
  showSlide(currentIndex);
});
