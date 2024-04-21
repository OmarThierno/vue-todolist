function createElem(curObject) {
  const liElem = document.createElement('li');
  const spanElem = document.createElement('span');
  spanElem.innerHTML = curObject.task;
  spanElem.classList.add('list-of-list')

  if (curObject.isDone) {
    spanElem.classList.add('strikethrough-text');
  }

  liElem.append(spanElem);
  listElem.append(liElem);
}