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

export { translateTranslit };