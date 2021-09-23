const fs = require('fs')
const path = require('path')

// eslint-disable-next-line
const csso = require('csso')

const { mpxx, medias, possibleMp, possibleD, possibleX } = require('./mpxx')

let c = 0
let css = ''

const mediaKeys = Object.keys(medias)

mediaKeys.forEach((mediaKey, mediaKeyIndex) => {
  if (mediaKey) css += `@media (min-width: ${medias[mediaKeys[mediaKeyIndex - 1]] || 0}px) and (max-width: ${medias[mediaKey]}px) {\n`

  possibleMp.forEach(mp => {
    possibleD.forEach(d => {
      possibleX.forEach(x => {
        if (mp === 'p' && x === 'auto') return

        const code = `${mp}${d}-${x}`

        c++
        css += `.${code}${mediaKey ? `-${mediaKey}` : ''} { ${mpxx(code).toCss()}}\n`
      })
    })
  })

  if (mediaKey) css += '}\n'
})

fs.writeFileSync(path.join(__dirname, '../mpxx.css'), css)

;({ css } = csso.minify(css))

fs.writeFileSync(path.join(__dirname, '../mpxx.min.css'), css)

console.log(`Done - ${c} classes.`)
