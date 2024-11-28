document.addEventListener("DOMContentLoaded", () => {
  const analyseForm = document.getElementById("analyseForm");
  const imageInput = document.getElementById("imageInput");
  const analysisResult = document.getElementById("analysisResult");

  analyseForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Check if a file is uploaded
      const file = imageInput.files[0];
      if (!file) {
          analysisResult.textContent = "Please upload an image!";
          analysisResult.style.color = "red";
          return;
      }

      // Simulate an analysis (placeholder for actual ML backend)
      analysisResult.textContent = "Analyzing image...";
      analysisResult.style.color = "blue";

      // Simulated analysis delay
      setTimeout(() => {
          analysisResult.textContent = `Analysis complete! The image indicates a healthy liver.`;
          analysisResult.style.color = "green";
      }, 3000); // 3-second delay
  });
});
