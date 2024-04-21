function createElem(curObject, indexToSplice) {
  const liElem = document.createElement('li');
  const spanTaskElem = document.createElement('span');
  spanTaskElem.innerHTML = curObject.task;
  spanTaskElem.classList.add('list-of-list');

  liElem.classList.add('task')

  if (curObject.isDone) {
    spanTaskElem.classList.add('strikethrough-text');
  }

  spanTaskElem.addEventListener('click', () => {
    spanTaskElem.classList.toggle('strikethrough-text')
    curObject.isDone = !curObject.isDone;
  })

  const spanCancelElem = document.createElement('span');
  spanCancelElem.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  spanCancelElem.classList.add('cancel');
  spanCancelElem.addEventListener('click', () => {
    console.log('click');
    liToSplice.forEach((curLi, index) => {
      const liToSplice = document.querySelectorAll('.task');
      if (indexToSplice === index) {
        curLi.remove()
        console.log(liToSplice);

      }
    });
  })

  
  liElem.append(spanTaskElem);
  liElem.append(spanCancelElem);
  listElem.append(liElem);
}