function createElem(curObject) {
  const liElem = document.createElement('li');
  const spanElem = document.createElement('span');
  spanElem.innerHTML = curObject.task;
  spanElem.classList.add('list-of-list');

  if (curObject.isDone) {
    spanElem.classList.add('strikethrough-text');
  }

  liElem.addEventListener('click', () => {
    console.log('click')
    spanElem.classList.toggle('strikethrough-text')
    curObject.isDone = !curObject.isDone;
    console.log(list);
  })
  
  liElem.append(spanElem);
  listElem.append(liElem);
}