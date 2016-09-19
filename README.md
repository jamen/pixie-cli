# pixie-cli [![NPM version](https://badge.fury.io/js/pixie-cli.svg)](https://npmjs.org/package/pixie-cli) [![Build Status](https://travis-ci.org/jamen/pixie-cli.svg?branch=master)](https://travis-ci.org/jamen/pixie-cli)

> Create and compile templates from the command line.

```sh
# Rendering:
echo "Foo {{bar}} baz" |
  pixie --bar='BLAG'
# Foo BLAG baz

# Parsing:
echo "Hello {{world}}?" |
  pixie parse
# [["Hello ","?\n"],["world"]]

# Compiling (template above):
echo '[["Hello ","?\\n"],["world"]]' |
  pixie compile --world='Earth'
# Hello Earth?
```

CLI wrapper over [`pixie`](https://github.com/jamen/pixie), to easily create and compile templates from command line.

You can also use a `.pixierc` file, or any [other methods the `rc` module supports](https://github.com/dominictarr/rc#standards)

## Installation

```sh
$ npm install --global pixie-cli
```

## API

### `pixie render`
Render the STDIN against the supplied data.  Running `pixie` aliases to this.

```sh
echo "Foo {{bar}} baz" | pixie --bar='12345'
# Foo 12345 baz
```

### `pixie parse`
Parse the STDIN into a Pixie template.

```sh
echo "Foo {{bar}} baz" | pixie parse
# [["Foo "," baz\n"],["bar"]]
```

### `pixie compile`
Compile the STDIN as a template, against data supplied through options or config.

```sh
cat template.json | pixie compile --bar='12345'
# Foo 12345 baz
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
