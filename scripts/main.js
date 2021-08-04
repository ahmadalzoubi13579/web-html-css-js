let billInput = document.querySelector('#bill');
let tipOptions = document.querySelectorAll('.buttons button');
let customTipInput = document.querySelector('#custom');
let peopleNumInput = document.querySelector('#people');

let tip;

let tipAmount = document.querySelector('.tip-amount');
let total = document.querySelector('.total');

let reset = document.querySelector('.reset');

let billSpan = document.querySelector('.bill .span-error');
let peopleNumSpan = document.querySelector('.people .span-error');

tipOptions.forEach((item) => {
  item.addEventListener('click', (e) => {
    button = e.target;
    tip = Number(button.value);
    resetButtons();
    item.classList.add('active-button');
    customTipInput.value = '';
    calculateResult();
  });
});

customTipInput.addEventListener('input', (e) => {
  resetButtons();
  tip = Number(e.target.value) / 100;
});

billInput.addEventListener('input', calculateResult);
customTipInput.addEventListener('input', calculateResult);
peopleNumInput.addEventListener('input', calculateResult);

reset.addEventListener('click', resetUi);

function resetButtons() {
  tipOptions.forEach((item) => {
    item.classList.remove('active-button');
  });
}

function resetUi() {
  billInput.value = '';
  customTipInput.value = '';
  peopleNumInput.value = '';
  tip = null;
  resetButtons();
  tipAmount.textContent = '';
  total.textContent = '';

  billSpan.classList.remove('active-span');
  billInput.classList.remove('active-input-error');
  peopleNumSpan.classList.remove('active-span');
  peopleNumInput.classList.remove('active-input-error');
}

function calculateResult() {
  if (billInput.value && peopleNumInput.value && tip) {
    let bill = Number(billInput.value);
    let peopleNum = Number(peopleNumInput.value);
    let billPerson = bill / peopleNum;
    let tipPerson = (tip * bill) / peopleNum;
    let totalPerson = billPerson + tipPerson;

    tipPerson = tipPerson.toFixed(2);
    totalPerson = totalPerson.toFixed(2);
    tipAmount.textContent = `$${tipPerson}`;
    total.textContent = `$${totalPerson}`;
  }

  if (!billInput.value) {
    billSpan.classList.add('active-span');
    billInput.classList.add('active-input-error');
  } else {
    billSpan.classList.remove('active-span');
    billInput.classList.remove('active-input-error');
  }

  if (!peopleNumInput.value) {
    peopleNumSpan.classList.add('active-span');
    peopleNumInput.classList.add('active-input-error');
  } else {
    peopleNumSpan.classList.remove('active-span');
    peopleNumInput.classList.remove('active-input-error');
  }
}
