const hast2pt = require('hast-util-to-portable-text')

module.exports = attacher

// Attacher.
// If a destination is given, runs the destination with the new portable text tree
// (bridge-mode).
// Without destination, returns the portable text tree: further
// plug-ins run on that tree (mutate-mode). */
function attacher(destination, options) {
  let dst = destination
  let settings

  if (destination && !destination.process) {
    settings = destination
    dst = null
  }

  settings = settings || options || {}

  if (settings.document === undefined || settings.document === null) {
    settings.document = true
  }

  return dst ? bridge(dst, settings) : mutate(settings)
}

// Bridge-mode.  Runs the destination with the new portable text tree.
function bridge(destination, options) {
  return transformer
  function transformer(node, file, next) {
    destination.run(hast2pt(node, options), file, done)
    function done(err) {
      next(err)
    }
  }
}

// Mutate-mode.  Further transformers run on the portable text tree.
function mutate(options) {
  return transformer
  function transformer(node) {
    return hast2pt(node, options)
  }
}
