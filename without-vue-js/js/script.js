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

const listElem = document.querySelector('.unorder-list')
// console.log(listElem);

list.forEach((curTask) => {

  createElem(curTask);
});


const addBtnElem = document.querySelector('button');
// console.log(addBtnElem);

addBtnElem.addEventListener('click', addTask);

const inputElem = document.querySelector('input');
// console.log(inputElem);

function addTask() {
  const inputValue = inputElem.value;

  if (inputValue !== '') {
    const newTask = {
      task: '',
      isDone: false
    };

    newTask.task = inputValue;
    list.push({...newTask});
    console.log(list);
    createElem(newTask);
    inputElem.value = '';
  }

}