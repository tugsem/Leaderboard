import './style.css';
import { addList, getData } from './modules/fetchData.js';

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

submit.addEventListener('click', addList);
refresh.addEventListener('click', getData);
window.onload = getData;