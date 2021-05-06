const fs = require('fs')
const path = require('path')

// eslint-disable-next-line
const csso = require('csso')

const { mpxx, possibleMp, possibleD, possibleX } = require('./mpxx')

let c = 0
let css = ''

;[false, true].forEach(media => {
  if (media) css += '@media (max-width: 600px) {\n'

  possibleMp.forEach(mp => {
    possibleD.forEach(d => {
      possibleX.forEach(x => {
        if (mp === 'p' && x === 'auto') return

        const code = `${mp}${d}-${x}`

        c++
        css += `.${code}${media ? '-m' : ''} { ${mpxx(code).toCss()}}\n`
      })
    })
  })

  if (media) css += '}\n'
})

fs.writeFileSync(path.join(__dirname, '../mpxx.css'), css)

;({ css } = csso.minify(css))

fs.writeFileSync(path.join(__dirname, '../mpxx.min.css'), css)

console.log(`Done - ${c} classes.`)
