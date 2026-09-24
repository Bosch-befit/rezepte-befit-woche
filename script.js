const pdfLink = document.getElementById('pdfLink');

const actualPdfUrl = '';

if (pdfLink) {
  pdfLink.href = '#';
  pdfLink.textContent = 'PDF in Bearbeitung';
  pdfLink.setAttribute('aria-disabled', 'true');
  pdfLink.setAttribute('role', 'link');

  pdfLink.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
