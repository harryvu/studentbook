// Simulated fetcher that returns a value or throws a promise
const textCache = {}
const getText = (text, ms) => {
  if (textCache[text]) {
    return text
  }
  throw new Promise(resolve => {
    setTimeout(() => {
      textCache[text] = true
      resolve()
    }, ms)
  })
}

export default getText;