// Question-1
function repeatTextAndFindChar(text, repeatCount) {
  const repeatedText = text.repeat(repeatCount);
  let aChars = [];

  for (char of repeatedText) {
    if (char == "a") {
      aChars.push(1);
    }
  }

  return aChars.length;
}

// Question-2
function removedCharsCount(text) {
  const charA = "A";
  const charB = "B";
  let removedChars = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == charA) {
      if (text[i + 1] == charA) {
        removedChars.push(1);
      }
    } else if (text[i] == charB) {
      if (text[i + 1] == charB) {
        removedChars.push(1);
      }
    }
  }

  return removedChars.length;
}

// Question-3
function listSwapsCounts(numbersList) {
  let swapCounts = 0;

  for (i = 0; i < numbersList.length; i++) {
    if (numbersList[i] != i + 1) {
      let currentValue = numbersList[i];
      numbersList[numbersList.indexOf(i + 1)] = currentValue;
      numbersList[i] = i + 1;
      swapCounts += 1;
    }
  }

  return swapCounts;
}
