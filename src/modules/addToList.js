const ul = document.querySelector('.score-list');

const addList = () => {
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  if (name.value.length !== 0 && score.value.length !== 0) {
    const li = document.createElement('li');
    li.innerText = `${name.value}: ${score.value}`;
    ul.appendChild(li);
  }
  name.value = '';
  score.value = '';
};

export default addList;