const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('button')];
const cards = [...document.querySelectorAll('.brand-card')];
const status = document.querySelector('#sonuc');

function filterBrands(selectedButton) {
  const selectedSector = selectedButton.dataset.filter;
  let visibleCount = 0;

  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === selectedButton));
  }

  for (const card of cards) {
    const isVisible = selectedSector === 'all' || card.dataset.sector === selectedSector;
    card.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
    }
  }

  status.textContent = `${visibleCount} marka gösteriliyor.`;
}

for (const button of buttons) {
  button.addEventListener('click', () => filterBrands(button));
}

filters.hidden = false;