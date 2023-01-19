// Please Clone this before start!!
// 請實作這兩個 function
// 1. Count Char to Object
function count(str) {
  // 1. implement here
  const arr = str.split('')
  return arr.reduce(function (obj, item) {
    if (obj.hasOwnProperty(item)) {
      return { ...obj, [item]: (obj[item] += 1) }
    } else {
      return { ...obj, [item]: 1 }
    }
  }, {})
}

expect(count('aabccadb')).toEqual({
  a: 3,
  b: 2,
  c: 2,
  d: 1
})

// 2. unic
function uniq(str) {
  // 2. implement here
  const newArr = []
  str.forEach(n => {
    if (newArr.includes(n)) {
      return
    } else {
      newArr.push(n)
    }
  })
}
expect(uniq([1, 2, 2, 3, 4, 5, 5, 8])).toEqual([1, 2, 3, 4, 5, 8])
