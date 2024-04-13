document.querySelector('.btn--arrow')?.addEventListener('click', e => {
  if (e.currentTarget.classList.contains('show')) {
    e.currentTarget.classList.remove('btn--open');
    e.currentTarget.textContent = 'Show All';
  } else {
    e.currentTarget.classList.add('btn--open');
    e.currentTarget.textContent = 'Hide';
  }
  e.currentTarget.classList.toggle('show');
  const articles = document.querySelectorAll('.portfolio__item:nth-child(n+7)'); // Выбираем последние 3 товара
    articles.forEach(article => {
      article.classList.toggle('show');
    });
  // e.currentTarget.previousElementSibling.classList.toggle('show');
});