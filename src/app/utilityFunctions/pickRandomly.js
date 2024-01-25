export function pickRandomly(listOfElement, totalNumberToPick) {
  // Check if the input array has at least 5 numbers
  if (listOfElement.length <= totalNumberToPick) {
    console.error("Input array must contain more than 5 numbers.");
    return [];
  }

  // Shuffle the input array to get random order
  const shuffledList = listOfElement.sort(() => Math.random() - 0.5);

  // Return the first 5 numbers
  return shuffledList.slice(0, totalNumberToPick);
}

