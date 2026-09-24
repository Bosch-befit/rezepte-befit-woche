const pdfLink = document.getElementById('pdfLink');

const actualPdfUrl = 'BeFit%20Rezepte.pdf';

if (pdfLink) {
  pdfLink.href = actualPdfUrl;
  pdfLink.textContent = 'PDF herunterladen';
  pdfLink.removeAttribute('aria-disabled');
  pdfLink.removeAttribute('role');
}
