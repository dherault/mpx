const maxX = 12
const possibleMp = ['m', 'p']
const possibleD = ['', 'x', 'y', 't', 'b', 'l', 'r']
const possibleX = ['auto', '0', '0h', '1', '1h']

for (let i = 2; i <= maxX; i++) possibleX.push(i.toString())

const mpConversion = {
  m: 'margin',
  p: 'padding',
}

const dConversion = {
  '': [''],
  x: ['left', 'right'],
  y: ['top', 'bottom'],
  t: ['top'],
  b: ['bottom'],
  l: ['left'],
  r: ['right'],
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function convertMp(mp, d, isJs) {
  return `${mpConversion[mp]}${d ? isJs ? capitalize(d) : `-${d}` : ''}`
}

function convertX(x) {
  if (x === 'auto') return 'auto'

  let offset = 0

  if (x.endsWith('h')) {
    [x] = x
    offset = 0.5
  }

  return `${(parseInt(x) + offset) / 2}rem`
}

function filterPaddingAuto([key, value]) {
  return !(key.startsWith('p') && value === 'auto')
}

function mpxx(code) {
  const [mpx, x] = code.split('-')

  const mp = mpx[0]
  const d = mpx[1] || ''

  if (!(possibleMp.includes(mp) && possibleD.includes(d) && possibleX.includes(x))) {
    throw new Error(`mpx: invalid code: ${code}`)
  }

  return {
    code,
    toCss: () => dConversion[d]
      .map(d => [convertMp(mp, d), convertX(x)])
      .filter(filterPaddingAuto)
      .reduce((css, array) => `${css}${array[0]}: ${array[1]}; `, ''),
    toJs: () => dConversion[d]
      .map(d => [convertMp(mp, d, true), convertX(x)])
      .filter(filterPaddingAuto)
      .reduce((object, array) => Object.assign(object, { [array[0]]: array[1] }), {}),
  }
}

module.exports = {
  mpxx,
  possibleMp,
  possibleD,
  possibleX,
}
