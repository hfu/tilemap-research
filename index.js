const config = require('config')
const fs = require('fs')

const json = JSON.parse(fs.readFileSync(config.get('tilemap'), 'utf-8'))

let nLeafs = 0
let nEmpties = 0
let nEntities = 0

const show = () => {
  console.log(`${nLeafs} leafs, ${nEmpties} empties.`)
}

const check = (entity) => {
  for (let element of entity) {
    nEntities++
    if (nEntities % 1000 === 0) show()
    if (Array.isArray(element)) {
      check(element)
    } else {
      if (element === 1) {
        nLeafs++
      } else if (element === 0) {
        nEmpties++
      }
    }
  }
}

check(json.index)
console.log('final result:')
show()
