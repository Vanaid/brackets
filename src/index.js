module.exports = function check(str, bracketsConfig) {
  let result = str;
    let regStr = '';

    bracketsConfig.forEach(e => {
      let brackets = e[0] + e[1];
      if (isNaN(brackets)) {
        regStr += `\\${e[0]}\\${e[1]}|`;
      } else {
        regStr += `${e[0]}${e[1]}|`;
      }
    });

    regStr = regStr.slice(0, -1);

    let regExpBrackets = new RegExp(regStr, 'g');

    for(let i = 0; i < (str.length / 2); i++) {
      result = result.replace(regExpBrackets, '');
    };

    return result.length === 0;
};
