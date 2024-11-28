// Simulate image processing
function processImage() {
  const uploadInput = document.getElementById('imageUpload');
  const resultContainer = document.getElementById('resultContainer');

  if (uploadInput.files.length === 0) {
      alert("Please upload an image file.");
      return;
  }

  const fileName = uploadInput.files[0].name;

  // Simulate processing with a loading message
  resultContainer.innerHTML = `<p>Processing ${fileName}...</p>`;

  // Simulate results after 2 seconds
  setTimeout(() => {
      resultContainer.innerHTML = `
          <h3>Results for ${fileName}:</h3>
          <ul>
              <li>Detected Abnormalities: None</li>
              <li>Liver Condition: Healthy</li>
              <li>Risk Level: Low</li>
          </ul>
      `;
  }, 2000);
}

// Filter patient records by name
function filterRecords() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const patientList = document.getElementById('patientList');
  const patients = patientList.getElementsByTagName('li');

  for (let i = 0; i < patients.length; i++) {
      const patientName = patients[i].getAttribute('data-name').toLowerCase();
      if (patientName.includes(searchInput)) {
          patients[i].style.display = '';
      } else {
          patients[i].style.display = 'none';
      }
  }
}
