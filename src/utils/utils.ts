export function generateBoard(size = 6) {
  // const uniqueNumbers = Array.from({ length: size ** 2 / 2 }, (_, i) => ({
  const uniqueNumbers = Array.from({ length: 18 }, (_, i) => ({
    number: i,
    show: false,
  }));
  const shuffledNumbers = shuffleArray(uniqueNumbers);
  const selectedShuffledNumbers = shuffledNumbers.slice(0, size ** 2 / 2);

  const doubleNumbers = selectedShuffledNumbers.concat(selectedShuffledNumbers);

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

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}
