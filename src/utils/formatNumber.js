export const formatNumber = number => {
  const charList = number.toString().split('');
  const newCharList = [];
  let charNumber = 0;

  for (let i = charList.length - 1; i > -1; i -= 1) {
    charNumber += 1;

    if (charNumber % 3 === 1 && charNumber !== 1) {
      newCharList.push(charList[i] + ',');
    } else {
      newCharList.push(charList[i]);
    }
  }

  return newCharList.reverse().join('');
};
