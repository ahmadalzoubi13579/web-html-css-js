const openMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const menu = document.querySelector('.menu');

const tabs = document.querySelectorAll('.features-title li');
const features = document.querySelectorAll('.features-content li');

const questions = document.querySelectorAll('.question');

tabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      const span = tab.children[0];
      span.classList.remove('active-tab');
    });
    const span = tab.children[0];
    span.classList.add('active-tab');

    features.forEach((feature, featureInex) => {
      if (tabIndex === featureInex) {
        feature.classList.add('active');
      } else {
        feature.classList.remove('active');
      }
    });
  });
});

questions.forEach((question, questionIndex) => {
  question.addEventListener('click', () => {
    questions.forEach((question2, questionIndex2) => {
      if (questionIndex !== questionIndex2) {
        const p = question2.nextElementSibling;
        const arrow = question2.children[1];
        p.classList.remove('active');
        arrow.classList.remove('active-arrow');
      }
    });
    const p = question.nextElementSibling;
    const arrow = question.children[1];
    if (p.classList.contains('active')) {
      p.classList.remove('active');
      arrow.classList.remove('active-arrow');
    } else {
      p.classList.add('active');
      arrow.classList.add('active-arrow');
    }
  });
});

openMenuButton.addEventListener('click', () => {
  menu.classList.add('active');
});

closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('active');
});
