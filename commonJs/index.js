import _ from 'lodash'

const app = document.getElementById('App')
const arr = [4, 4, 4, 4, 4, 4]
_.fill(arr, 6)
arr.map((el) => {
  const p = document.createElement('p')
  p.innerHTML = el
  app.appendChild(p)
})
console.log(app)
console.log(arr)
console.log('hi')
