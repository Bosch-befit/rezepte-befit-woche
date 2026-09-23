const pdfLink = document.getElementById('pdfLink');

const actualPdfUrl = 'https://github.com/Bosch-befit/rezepte-befit-woche/blob/main/meine%20Kreationen.pdf';

if (pdfLink) {
  pdfLink.href = actualPdfUrl;
}
