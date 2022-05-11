import './style.css';
import addList from './modules/addToList.js';

const submit = document.querySelector('#submit');
submit.addEventListener('click', addList);