# Validating XMLs against XSD schema

NB: This is a straightforward fork of [node-xsd-validator](https://github.com/deltazero-cz/node-xsd-validator) to update to use [libxml2](https://github.com/marudor/libxmljs2). That package is also no longer maintained so at some point a further update will be required.

Tool for simple validation of XML documents against a XSD schema. Using [libxml2](https://github.com/marudor/libxmljs2).

### Installation

```shell
npm i @richhouse83/xsd-validator
```

### Usage

```js
import validateSchema from '@richhouse83/xsd-validator'

// returns true for valid documents
validateSchema('<xml...', '<xs:schema...')
// -> true

// returns Error[] for invalid valid documents
validateSchema('<xml...', '<xs:schema...')
// [error, error ... ]

```

### Requirements

Make sure you have met the requirements for [node-gyp](https://github.com/TooTallNate/node-gyp#installation). You DO NOT need to manually install node-gyp; it comes bundled with node.
