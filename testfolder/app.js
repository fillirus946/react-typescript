// let text = 'this is amazing stoy'

//the biggest word
//return massive

//devide
//find the biggest one
//create and return array


// function minMax(t) {
  
//     let min = t.split(' ').reduce((prev, current )=> prev.length > current.length ? current.length : prev)

//     let max = t.split(' ').reduce((prev, current) => prev < current.length ? current.length : prev , 0)

//     console.log("min:", min,"max:", max)

//     }


// minMax(text)

// create new array and push origin
// reverse array in time of looping
// console.log(num)


// for(let i = 0; i < num.length; i++){
  // let smth = num.length-1
  // const newArr = []

  // console.log(i)
// }

// const num = [ 1, 2, 3, 4 ]

// create new array and push origin
// reverse array in time of looping
// console.log(num)


// let smth = []
// num.map((el) => smth.unshift(el))

// console.log(smth)



// const n = 5987342

//translate in binary
// remove the 1
// loop and find element with bigger number of 0

// function binary(n){
//   let bnum = (n >>> 0).toString(2)
//   let arr = bnum.split(1)
//   console.log(arr)
//   let answer = arr.reduce((prev, current) => prev < current.length ? current.length : prev)
//   console.log(answer)

// }

// binary(n)

// const arr = [[1, 2, 3], [50, 11, 4], [7, 8, 44]]

// let smth =  arr.map(subarr => subarr.reduce((prev, current) => prev > current ? prev : prev = current))

// console.log(smth)




let str = 'i have a potato'
// нельзя использовать end with

let wrd = 'to'

// split() to massive
// find the last elem
// compare

function potatoChecket(str, wrd){

    // let answer = str.split(' ')
    // let finalAnswer = answer[answer.length-1] === wrd ? true : false
    // console.log(finalAnswer)

    let sub = wrd.length
    let answer = str.substring(str.length-sub) == wrd ? true : false
    console.log(answer)
}
potatoChecket(str, wrd)

