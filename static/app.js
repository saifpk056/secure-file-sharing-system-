// Sample encrypted files
const files = [
  ["sample_report.pdf.enc", "sample_report.pdf", "2.45 MB"],
  ["thesis_document.pdf.enc", "thesis_document.pdf", "1.85 MB"],
  ["project_summary.pdf.enc", "project_summary.pdf", "1.25 MB"],
  ["data_analysis.xlsx.enc", "data_analysis.xlsx", "980 KB"]
];

// Display files in the My Files table
document.getElementById("rows").innerHTML = files
  .map(
    (file) => `
      <tr>
        <td>🔐 ${file[0]}</td>
        <td>${file[1]}</td>
        <td>${file[2]}</td>
        <td>Encrypted</td>
        <td>
          <button onclick="downloadFile('${file[0]}')">
            Download
          </button>
        </td>
      </tr>
    `
  )
  .join("");

// Simulate encryption and upload
function upload() {
  const status = document.getElementById("uploadStatus");

  status.textContent =
    "✓ File encrypted with AES-256 and uploaded securely.";
}

// Simulate signed URL generation
function link() {
  const status = document.getElementById("linkStatus");

  status.textContent =
    "✓ Signed download link generated. Expires in 1 hour.";
}

// Simulate secure download
function downloadFile(fileName) {
  alert(
    "Secure download requested for:\n\n" +
    fileName +
    "\n\nAccess is authorized through a time-limited secure link."
  );
}
