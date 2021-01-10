const fs = require('fs')
const data = fs
  .readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((str) => str.split(''))

function countAdjacent(matrix, row, col) {
  let adjacent = 0
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i === row && j === col) continue
      if (i < 0 || i >= matrix.length) continue
      if (j < 0 || j >= matrix[i].length) continue

      if (matrix[i][j] === '#') adjacent++
    }
  }
  return adjacent
}

function countOccupied(matrix) {
  let occupied = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '#') occupied++
    }
  }
  return occupied
}

function shuffleRound(oldMatrix) {
  const newMatrix = JSON.parse(JSON.stringify(oldMatrix))
  let isChanged = false

  for (let row = 0; row < oldMatrix.length; row++) {
    for (let col = 0; col < oldMatrix[row].length; col++) {
      const seat = oldMatrix[row][col]
      const adjacent = countAdjacent(oldMatrix, row, col)
      if (seat === 'L' && adjacent === 0) {
        newMatrix[row][col] = '#'
        isChanged = true
      } else if (seat === '#' && adjacent >= 4) {
        newMatrix[row][col] = 'L'
        isChanged = true
      }
    }
  }
  return [isChanged, newMatrix]
}

function part1() {
  let currentMatrix = JSON.parse(JSON.stringify(data))

  while (true) {
    const [isChanged, newMatrix] = shuffleRound(currentMatrix)
    currentMatrix = JSON.parse(JSON.stringify(newMatrix))
    if (!isChanged) {
      return countOccupied(currentMatrix)
    }
  }
}

console.log(part1())
