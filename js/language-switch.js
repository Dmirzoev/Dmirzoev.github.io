function switchLang(lang, btn) {
  const modalContent = btn.closest('.modal-content');
  const en = modalContent.querySelector('.en');
  const ru = modalContent.querySelector('.ru');

  if(lang === 'en') {
    en.style.display = 'block';
    ru.style.display = 'none';
  } else {
    en.style.display = 'none';
    ru.style.display = 'block';
  }
}
