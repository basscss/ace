
// Gets data from packages and builds data.json

const fs = require('fs')
const path = require('path')
const marked = require('marked')

const src = fs.readFileSync(path.join(__dirname, '..', 'index.css'), 'utf8')
const data = require('../package.json')
data.title = 'Ace.css'
data.css = fs.readFileSync(path.join(__dirname, '..', 'css/ace.min.css'), 'utf8')

data.modules = src.split('\n')
  .filter(line => /^@import/.test(line))
  .map((line, i) => {
    const name = line.replace(/^@import\s'/, '')
      .replace(/\';$/, '')
    return name
  })
  .filter(n => /addons/.test(n))
  .map(filename => {
    const pkg = require(path.resolve(__dirname, '..', `node_modules/${filename}/package.json`))
    const readme = fs.readFileSync(path.join(__dirname, '..', `node_modules/${filename}/README.md`), 'utf8')
    const html = marked(readme)
    const shortname = pkg.name.replace(/^basscss\-/, '')
    return Object.assign({}, pkg, {
      filename,
      shortname,
      readme,
      npm: `https://npmjs.com/package/${pkg.name}`,
      html
    })
  })

data.features = [
  'All typography and layout utilities from the core Basscss module',
  'Base element styles from basscss-basic',
  'Form styles from basscss-forms',
  'Button styles with solid and outline styles, along with size modifiers',
  'Range input styles from basscss-input-range',
  'Progress element styles from basscss-progress',
  'Responsive margin and padding utilities',
  'Media Object',
  'Colors, background colors, and border colors from clrs.cc',
  'Darken and lighten background utilities',
  'Background image utilities'
]

console.log(data.modules.length, 'modules found')

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data))

