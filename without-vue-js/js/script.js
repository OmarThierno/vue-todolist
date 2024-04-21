const list = [
  {
    task: 'Leggere la letterina di Babbo natale',
    isDone: false,
  },
  {
    task: 'Comprare il latte',
    isDone: false,
  },
  {
    task: 'Dar da mangiare al Gatto',
    isDone: true,
  },
  {
    task: 'Fare il bucato',
    isDone: false,
  },
  {
    task: 'Battere Lori a scacchi',
    isDone: false,
  },
];

const newTask = {
  task: '',
  isDone: false
};

const listElem = document.querySelector('.unorder-list')
console.log(listElem);

list.forEach((curTask) => {

  const liElem = document.createElement('li');
  const spanElem = document.createElement('span');
  spanElem.innerHTML = curTask.task;
  spanElem.classList.add('list-of-list')

  if (curTask.isDone) {
    spanElem.classList.add('strikethrough-text');
  }

  liElem.append(spanElem);
  listElem.append(liElem);

})