const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
  item.addEventListener('click', (e) => {
    const question = e.currentTarget.children[0];
    const arrrow = e.currentTarget.children[1];
    const para = e.currentTarget.nextElementSibling;

    if (question.classList.contains('active-question')) {
      question.classList.remove('active-question');
      arrrow.classList.remove('active-arrow');
      para.classList.remove('active-para');
    } else {
      question.classList.add('active-question');
      arrrow.classList.add('active-arrow');

      para.classList.add('active-para');
    }
  });
});
