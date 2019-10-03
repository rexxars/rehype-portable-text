const hast2pt = require('hast-util-to-portable-text')

module.exports = rehypePortableText

function rehypePortableText(options = {}) {
  this.Compiler = compiler

  function compiler(node) {
    return hast2pt(node, options)
  }
}
