// Sample Patient Data
const patients = [
  { name: "John Doe", condition: "Healthy" },
  { name: "Jane Smith", condition: "Fatty Liver" },
  { name: "Robert Johnson", condition: "Cirrhosis" },
  { name: "Emily Davis", condition: "Mild Inflammation" },
  { name: "Michael Brown", condition: "Tumor Detected" },
  { name: "Alice Green", condition: "Liver Failure" },
  { name: "David Wilson", condition: "Hepatitis" },
  { name: "Sarah Lee", condition: "Normal" },
  { name: "Peter Parker", condition: "Scarred Tissue" },
  { name: "Nina Patel", condition: "Early Fibrosis" },
  { name: "Chris Evans", condition: "Mild Inflammation" },
  { name: "Paul Walker", condition: "Fatty Liver" },
  { name: "Sophia Turner", condition: "Tumor Detected" },
  { name: "Dwayne Johnson", condition: "Cirrhosis" },
];

// Pagination Variables
let currentPage = 1;
const recordsPerPage = 4;

// Render Patient List
function renderPatients() {
  const patientList = document.getElementById("patientList");
  const pageInfo = document.getElementById("pageInfo");
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentPatients = patients.slice(startIndex, endIndex);

  // Clear and Populate List
  patientList.innerHTML = "";
  currentPatients.forEach((patient) => {
      const li = document.createElement("li");
      li.textContent = `${patient.name} - Liver Condition: ${patient.condition}`;
      li.dataset.name = patient.name.toLowerCase();
      patientList.appendChild(li);
  });

  // Update Pagination Info
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(patients.length / recordsPerPage)}`;

  // Enable/Disable Buttons
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = endIndex >= patients.length;
}

// Change Page
function changePage(direction) {
  currentPage += direction;
  renderPatients();
}

// Filter Patient Records
function filterRecords() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const patientList = document.getElementById("patientList");
  const patientItems = patientList.getElementsByTagName("li");

  for (let i = 0; i < patientItems.length; i++) {
      const patientName = patientItems[i].dataset.name;
      if (patientName.includes(searchInput)) {
          patientItems[i].style.display = "";
      } else {
          patientItems[i].style.display = "none";
      }
  }
}

// Initial Render
document.addEventListener("DOMContentLoaded", renderPatients);
