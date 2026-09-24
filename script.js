const pdfLink = document.getElementById('pdfLink');

const actualPdfUrl = 'https://raw.githubusercontent.com/Bosch-befit/rezepte-befit-woche/main/meine%20Kreationen.pdf';

if (pdfLink) {
  pdfLink.href = actualPdfUrl;
  pdfLink.setAttribute('download', 'befit-rezepte.pdf');
  pdfLink.setAttribute('target', '_blank');
}
