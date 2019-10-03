# rehype-portable-text

[![Build][build-badge]][build]
[![Size][size-badge]][size]

[**rehype**][rehype] plugin to transform to [**Portable Text**][portable-text].

## Install

[npm][]:

```sh
npm install rehype-portable-text
```

## Use

The following example shows how to convert HTML content into Portable Text.

```js
const unified = require('unified')
const parse = require('rehype-parse')
const toPortableText = require('rehype-portable-text')

const processor = unified()
  .use(parse)
  .use(toPortableText)

const html = `
  <h1>Hans Dahl</h1>
  <p><b>Hans Dahl</b> was a <a href="https://en.wikipedia.org/wiki/Norway">Norwegian</a> <a href="https://en.wikipedia.org/wiki/Painting">painter</a>. He was famous for his paintings of Norwegian fjords and surrounding landscapes.</p>`

const content = processor.processSync(html).contents
console.log(content)
```

Yields:

```json
[
  {
    "_type": "block",
    "style": "h1",
    "children": [
      {
        "_type": "span",
        "marks": [],
        "text": "Hans Dahl"
      }
    ],
    "markDefs": []
  },
  {
    "_type": "block",
    "style": "normal",
    "markDefs": [
      {
        "_key": "m1131804957159",
        "_type": "link",
        "href": "https://en.wikipedia.org/wiki/Norway"
      },
      {
        "_key": "m12767684646649",
        "_type": "link",
        "href": "https://en.wikipedia.org/wiki/Painting"
      }
    ],
    "children": [
      {
        "_type": "span",
        "marks": ["strong"],
        "text": "Hans Dahl"
      },
      {
        "_type": "span",
        "marks": [],
        "text": " was a "
      },
      {
        "_type": "span",
        "marks": ["m1131804957159"],
        "text": "Norwegian"
      },
      {
        "_type": "span",
        "marks": [],
        "text": " "
      },
      {
        "_type": "span",
        "marks": ["m12767684646649"],
        "text": "painter"
      },
      {
        "_type": "span",
        "marks": [],
        "text": ". He was famous for his paintings of Norwegian fjords and surrounding landscapes."
      }
    ]
  }
]
```

## API

### `origin.use(rehype2portabletext[, options])`

[**rehype**][rehype] ([hast][]) plugin to transform to [**Portable Text**][portable-text].

Typically, [**unified**][unified] compilers return `string`.
This compiler returns an array of portable text blocks.
When using `.process` or `.processSync`, the value at `file.contents` (or when
using `.stringify`, the return value), is an `Array`.
When using TypeScript, cast the type on your side.

## Security

Use of `rehype-portable-text` can open you up to a [cross-site scripting (XSS)][xss]
attack if the tree is unsafe.
Use [`rehype-sanitize`][sanitize] to make the tree safe.

## Related

- [`remark-rehype`](https://github.com/remarkjs/remark-rehype)
  — Transform Markdown ([**mdast**][mdast]) to HTML ([**hast**][hast])
- [`rehype-remark`](https://github.com/sanity-io/rehype-remark)
  — Transform HTML ([**hast**][hast]) to Markdown ([**mdast**][mdast])
- [`rehype-sanitize`][sanitize]
  — Sanitize HTML

## License

[MIT][license].

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/sanity-io/rehype-portable-text/master.svg
[build]: https://travis-ci.org/sanity-io/rehype-portable-text
[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-portable-text.svg
[size]: https://bundlephobia.com/result?p=rehype-portable-text
[npm]: https://docs.npmjs.com/cli/install
[license]: LICENSE
[unified]: https://github.com/unifiedjs/unified
[rehype]: https://github.com/sanity-io/rehype
[mdast]: https://github.com/syntax-tree/mdast
[hast]: https://github.com/syntax-tree/hast
[portable-text]: https://github.com/portabletext/portabletext
[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
[sanitize]: https://github.com/rehypejs/rehype-sanitize
