// Question-1
function repeatTextAndFindChar(text, repeatCount) {
  const repeatedText = text.repeat(repeatCount);
  let aChars = 0;

  for (char of repeatedText) {
    if (char == "a") {
      aChars += 1;
    }
  }

  return aChars;
}

// Question-2
function removedCharsCount(text) {
  const charA = "A";
  const charB = "B";
  let removedChars = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] == charA) {
      if (text[i + 1] == charA) {
        removedChars += 1;
      }
    } else if (text[i] == charB) {
      if (text[i + 1] == charB) {
        removedChars += 1;
      }
    }
  }

  return removedChars;
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
