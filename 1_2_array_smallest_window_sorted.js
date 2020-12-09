const array = [1, 5, 3, 6, 9]

// O(nlogn) solution
const solution1 = (input) => {
  let left, right
  const sorted = [...input].sort()

  input.forEach((num, idx) => {
    if (num !== sorted[idx] && typeof left === 'undefined') {
      left = idx
    } else if (num !== sorted[idx]) {
      right = idx
    }
  })

  return [left, right]
}

// O(n) solution
const solution2 = (input) => {
  let left, right
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY

  input.forEach((num, idx) => {
    max = Math.max(max, num)

    if (num < max) {
      right = idx
    }
  })

  for (let i = input.length - 1; i >= 0; i--) {
    let current = input[i]
    min = Math.min(min, current)

    if (current > min) {
      left = i
    }
  }

  return [left, right]
}