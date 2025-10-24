export function getRandomScream() {
  const wordLength = Math.floor(Math.random() * 16) + 5;
  let result = "";

  for (let i = 0; i < wordLength; i++) {
    result += "A";
  }

  return result;
}
