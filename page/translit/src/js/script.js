import qwerty from './qwerty.js';
import translit from './translit.js';

import { translateQwerty } from './translateQwerty.js';
import { translateTranslit } from './translateTranslit.js';

let input = document.querySelector('.translator-input'),
    output = document.querySelector('.translator-output'),

    layoutRu = document.querySelector('.translator-layout-ru'),
    layoutEn = document.querySelector('.translator-layout-en'),
    layoutMark = document.querySelector('.translator-layout-mark'),

    translitLatin = document.querySelector('.translator-translit-latin'),
    translitRu = document.querySelector('.translator-translit-ru'),
    translitMark = document.querySelector('.translator-translit-mark'),

    reverseField = document.querySelector('.translator-reverse');

let text = '';

layoutRu.addEventListener('click', () => {
  text = translateQwerty(input.value, qwerty, 'ru');
  output.textContent = text;
  addLog(input.value, text);

  layoutMark.textContent = layoutEn.textContent;
});

layoutEn.addEventListener('click', () => {
  text = translateQwerty(input.value, qwerty, 'en');;
  output.textContent = text;
  addLog(input.value, text);

  layoutMark.textContent = layoutRu.textContent;
});

translitLatin.addEventListener('click', () => {
  text = translateTranslit(input.value, translit, 'latin');
  output.textContent = text;
  addLog(input.value, text);

  translitMark.textContent = translitRu.textContent;
});

translitRu.addEventListener('click', () => {
  text = translateTranslit(input.value, translit, 'ru');
  output.textContent = text;
  addLog(input.value, text);

  translitMark.textContent = translitLatin.textContent;
});

reverseField.addEventListener('click', () => {
  let tmp = input.value;

  input.value = output.textContent;
  output.textContent = tmp;
});

function addLog(textFrom, textTo) {
  if (textFrom !== '') {
    console.log(`из ${textFrom} в ${textTo}`);
  }
}

// console.log(translateTranslit('Петров Иван Прокопьевич ловил лещя на сома', translit, 'latin'));
// console.log(translateTranslit('petrov ivan prokop`yevich lovil leshcha na soma', translit, 'ru'));