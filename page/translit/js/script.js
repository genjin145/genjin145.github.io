var qwerty = {
  "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г",
  "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы",
  "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д",
  ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и",
  "n":"т", "m":"ь", ",":"б", ".":"ю", "/":"."
};

var translit = {
  "а":"a",
  "б":"b",
  "в":"v",
  "г":"g",
  "д":"d",
  "е":"e",
  "ё":"yo",
  "ж":"zh",
  "з":"z",
  "и":"i",
  "i":"i",
  "й":"i",
  "к":"k",
  "л":"l",
  "м":"m",
  "н":"n",
  "о":"o",
  "п":"p",
  "р":"r",
  "с":"s",
  "т":"t",
  "у":"u",
  "ф":"f",
  "х":"kh",
  "ц":"cz",
  "ч":"ch",
  "ш":"sh",
  "щ":"shh",
  "ы":"y",
  "ъ":"``",
  "ь":"`",
  "э":"e", 
  "ю":"yu",
  "я":"ya"
};

function translateQwerty(str, obj, lang) {
  let lowerStr = str.toLowerCase(),
      resultStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = '';

    if (lang === 'ru') {
      if (obj[lowerStr[i]]) {
        char = obj[lowerStr[i]];
      }
    }

    if (lang === 'en') {
      for (let key in obj) {
        if (lowerStr[i] === obj[key]) {
          char = key;
          break;
        }
      }
    }
  
    resultStr += char || lowerStr[i];
  }

  return resultStr;
}

function translateTranslit(str, obj, lang) {
  let lowerStr = str.toLowerCase(),
      resultStr = '';

  for (let i = 0; i < lowerStr.length; i++) {
    let char = '';

    if (lang === 'latin') {
      if (obj[lowerStr[i]]) {
        char = obj[lowerStr[i]];
      }
    }

    if (lang === 'ru') {
      let flag = false;

      for (let j = 3; j >= 1; j--) {
        if (flag) break;

        for (let key in obj) {
          if (lowerStr.substring(i, i + j) === obj[key]) {
            char = key;
            flag = true;
            i += j - 1;
            break;
          }
        }
      }
    }

    resultStr += char || lowerStr[i];
  }

  return resultStr;
}

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
  text = translateQwerty(input.value, qwerty, 'en');  output.textContent = text;
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
