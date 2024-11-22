export function generateBoard(size = 6) {
  const uniqueNumbers = Array.from({ length: size ** 2 / 2 }, (_, i) => ({
    number: i,
    show: false,
  }));
  const doubleNumbers = uniqueNumbers.concat(uniqueNumbers);

  return shuffleArray(doubleNumbers);
}

export function shuffleArray(arr: { number: number; show: boolean }[]) {
  const shuffledArr = [...arr];
  let currentIndex = shuffledArr.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }
  return shuffledArr;
}
