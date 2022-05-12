const sendAPI = async (url, data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const addList = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9kAwNur2oUAcB40wbs6S/scores';
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  const ul = document.querySelector('.score-list');
  if (name.value.length !== 0 && score.value >= 0) {
    const li = document.createElement('li');
    li.innerText = `${name.value}: ${score.value}`;
    ul.appendChild(li);
    sendAPI(url, { user: name.value, score: score.value });
  }
  name.value = '';
  score.value = '';
};

export const getData = async () => {
  const ul = document.querySelector('.score-list');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9kAwNur2oUAcB40wbs6S/scores');
  const data = await response.json();
  ul.innerHTML = '';
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = `${element.user}: ${element.score}`;
    ul.appendChild(li);
  });
};