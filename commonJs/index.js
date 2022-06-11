import _ from 'lodash'

const app = document.getElementById('App')
const arr = []
_.fill(arr, 6)
app.innerHTML = arr.map((el) => '<p>el</p>')
