let openMenuBtn = document.querySelector('.open-menu-button');
let closeMenuBtn = document.querySelector('.close-menu-button');
let menu = document.querySelector('.menu');
let banner = document.querySelector('.banner');
let items = document.querySelectorAll('.span-wrapper');

openMenuBtn.addEventListener('click', () => {
  openMenuBtn.classList.add('unactive');
  closeMenuBtn.classList.add('active');

  menu.classList.add('active');
  banner.classList.add('unactive');
});

closeMenuBtn.addEventListener('click', () => {
  openMenuBtn.classList.remove('unactive');
  closeMenuBtn.classList.remove('active');

  menu.classList.remove('active');
  banner.classList.remove('unactive');

  items.forEach((item) => {
    let dropDownMenu = item.nextElementSibling;
    dropDownMenu.classList.remove('active');
  });
});

function collapseAllDropDownMenues(currenIndex) {
  items.forEach((item, index) => {
    if (index !== currenIndex) {
      let dropDownMenu = item.nextElementSibling;
      dropDownMenu.classList.remove('active');
    }
  });
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    collapseAllDropDownMenues(index);
    let dropDownMenu = item.nextElementSibling;
    if (dropDownMenu.classList.contains('active')) {
      dropDownMenu.classList.remove('active');
    } else {
      dropDownMenu.classList.add('active');
    }
  });
});
