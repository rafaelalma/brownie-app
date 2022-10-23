const capitalizeWord = (word: string) => {
  return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`
}

const capitalizePhrase = (phrase: string) => {
  return phrase
    .split(' ')
    .map((word) => capitalizeWord(word))
    .join(' ')
}

const stringHelper = {
  capitalizeWord,
  capitalizePhrase,
}

export default stringHelper
