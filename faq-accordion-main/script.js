const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const toggleBtn = item.querySelector('.faq-toggle img');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');


    faqItems.forEach(i => {
      i.classList.remove('active');
      const img = i.querySelector('.faq-toggle img');
      img.src = 'images/icon-plus.svg';
    });


    if (!isActive) {
      item.classList.add('active');
      toggleBtn.src = 'images/icon-minus.svg';
    } else {
      item.classList.remove('active');
      toggleBtn.src = 'images/icon-plus.svg';
    }
  });
});
