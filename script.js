const pdfLink = document.getElementById('pdfLink');

const actualPdfUrl = 'https://raw.githubusercontent.com/Bosch-befit/rezepte-befit-woche/main/meine%20Kreationen.pdf';

if (pdfLink) {
  pdfLink.href = actualPdfUrl;
  pdfLink.setAttribute('download', 'befit-rezepte.pdf');
  pdfLink.setAttribute('target', '_blank');
  pdfLink.setAttribute('rel', 'noopener noreferrer');
  pdfLink.setAttribute('aria-label', 'PDF herunterladen');

  pdfLink.addEventListener('click', (event) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && !event.metaKey && !event.ctrlKey) {
      event.preventDefault();
      window.open(actualPdfUrl, '_blank', 'noopener,noreferrer');
    }
  });
}
