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

export { translateQwerty };