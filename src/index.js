const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };
  
  function decode(expr) {
    const newArrExpr = [];
    const num = 10;
  
    for (let i = 0; i < expr.length; i += num) {
      newArrExpr.push(expr.slice(i, i + num));
    }
  
    const newArr = newArrExpr.map((elem) => {
      return Number(elem) || elem;
    });
  
    const arrResult = newArr.map((elem) => {
        const arrElem = [];
        const itemElem = String(elem);
        if (itemElem.includes("*")) {
          arrElem.push(" ");
        } else {
          for (let i = 0; i < itemElem.length; i += 2) {
            if (Number(`${itemElem[i]}${itemElem[i + 1]}`) === num) {
              arrElem.push(".");
            } else {
              arrElem.push("-");
            }
          }
        }
        return arrElem.join("");
      }).map((elem) => {
        return MORSE_TABLE[elem] || " ";
      }).join("");
  
    return arrResult;
  
  }
  
  module.exports = {
    decode,
  };