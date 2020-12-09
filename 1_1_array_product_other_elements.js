// Brute force solution
const solution1 = (inputArray) => {
  let result = []

  for (let i = 0; i < inputArray.length; i++) {
    let product = 1;

    for (let j = 0; j < inputArray.length; j++) {
      if (i !== j) {
        product *= inputArray[j]
      }
    }
    result[i] = product
  }
  return result
}

// O(n) solution
const solution2 = (inputArray) => {
  let prefix = []

  inputArray.forEach(num => {
    if (prefix.length === 0) {
      prefix.push(num)
    } else {
      prefix.push(prefix[prefix.length - 1] * num)
    }
  })

  let suffix = []

  inputArray.reverse().forEach(num => {
    if (suffix.length === 0) {
      suffix.push(num)
    } else {
      suffix.push(suffix[suffix.length - 1] * num)
    }
  })

  suffix = suffix.reverse()

  let result = []

  inputArray.forEach((_, idx) => {
    if (idx === 0) {
      result[0] = suffix[1]
    } else if (idx === inputArray.length - 1) {
      result[inputArray.length - 1] = prefix[inputArray.length - 2]
    } else {
      result[idx] = prefix[idx - 1] * suffix[idx + 1]
    }

  })

  return result
}
