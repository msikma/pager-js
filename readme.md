## Pager

A JS library and command line utility designed to make backups of HTML pages, and all its linked resources, into a single file.

When running this script on a file or URL, we will attempt to replace all external resources with inline versions so that the whole page shows up correctly as one file.

This library was made for website archiving purposes.

**Note: very early in development. Not ready to use yet.**

### Resource inlining

| Source                    | Type   | Status |
|:--------------------------|:-------|:-------|
| `<link rel="stylesheet">` | External CSS link | Inlined as `<style>` tag

Some items might be difficult or impossible to inline—`<object>` or `<embed>` for example.


### Development

The following scripts can be used:

* `yarn run lint`
* `yarn run test`
* `yarn run compile`
* `yarn run watch`

### Copyright

MIT license.
