# rehype-portable-text

[![Build][build-badge]][build]
[![Size][size-badge]][size]

[**rehype**][rehype] plugin to bridge or mutate to [**portable text**][portable-text].

Tiny wrapper around [`hast-util-to-portable-text`][to-portable-text].

## Install

[npm][]:

```sh
npm install rehype-portable-text
```

## API

### `origin.use(rehype2portabletext[, destination][, options])`

[**rehype**][rehype] ([hast][]) plugin to bridge or mutate to
[**portable text**][portable-text] ([portable-text][]).

###### `destination`

If given ([`Unified`][processor]), runs the destination processor with the new
**portable text** tree, then, after running discards that tree and continues on running
the origin processor with the original **hast** tree ([bridge-mode][bridge]).
Otherwise, passes the tree to further plugins (mutate-mode).

###### `options`

Options are passed to [`hast-util-to-portable-text`][to-portable-text].

## Credits

Heavily influenced by [`rehype-remark`](https://github.com/rehypejs/rehype-remark) by [Titus Wormer](https://wooorm.com/)

## License

[MIT][license] © [Espen Hovlandsdal][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/rexxars/rehype-portable-text.svg
[build]: https://travis-ci.org/rexxars/rehype-portable-text
[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-portable-text.svg
[size]: https://bundlephobia.com/result?p=rehype-portable-text
[npm]: https://docs.npmjs.com/cli/install
[license]: license
[author]: https://espen.codes/
[portable-text]: https://portabletext.org
[rehype]: https://github.com/rehypejs/rehype
[hast]: https://github.com/syntax-tree/hast
[processor]: https://github.com/unifiedjs/unified#processor
[bridge]: https://github.com/unifiedjs/unified#processing-between-syntaxes
[to-portable-text]: https://github.com/rexxars/hast-util-to-portable-text
