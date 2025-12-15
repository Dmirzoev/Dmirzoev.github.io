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
// открытие модалки
document.querySelectorAll('[data-modal]').forEach(link => {
  link.addEventListener('click', function() {
    const modal = document.getElementById(this.dataset.modal);
    if(modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // блокировка прокрутки
    }
  });
});

// закрытие модалки
document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', function() {
    const modal = this.closest('.modal');
    modal.style.display = "none";
    document.body.style.overflow = ""; // разблокировка прокрутки
  });
});



