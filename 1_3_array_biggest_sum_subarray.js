// O(n^2) solution
const solution1 = (input) => {
  let max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      const sum = input.slice(i, j + 1).reduce((acc, current) => acc + current)
      max = Math.max(sum, max)
    }
  }

  return max
}

// O(n) solution
const solution2 = (input) => {
  let globalMax = Number.NEGATIVE_INFINITY
  let localMax = Number.NEGATIVE_INFINITY

  input.forEach((num) => {
    localMax = Math.max(localMax + num, num)
    globalMax = Math.max(localMax, globalMax)
  })

  return globalMax
}
