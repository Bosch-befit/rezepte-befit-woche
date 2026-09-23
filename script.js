const pdfLink = document.getElementById('pdfLink');

// Replace this URL with your actual PDF URL.
const actualPdfUrl = 'https://example.com/dein-rezept.pdf';

if (pdfLink) {
  pdfLink.href = actualPdfUrl;
}
