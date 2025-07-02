# `DataProc`

DataProc is a JavaScript library for transforming JSON object - flatten and unflatten.

## Table of Contents

- [Installation](#installation)
- [Import Styles](#import-styles)
- [Example](#example)
- [API](#api)

## Installation

```sh
npm install dataproc --save
```

## Import styles

### CommonJS (Require)

```js
const { flatten, unflatten } = require('dataproc');

or

const dataproc = require('dataproc');
```

### ES6 Modules (Import)

#### Default import

```js
import { flatten, unflatten } from "dataproc";
```

## Example

```js
import { flatten, unflatten } from "dataproc";

const obj = {
        nestedObject1: {
            nestedObject2: {
                nestedObject3: {
                    array: [
                        parameter1: {
                            name: "param1",
                            value: "value0"
                        }
                    ]
                }
            }
        }
    }

const flattenedObject = flatten(obj);
const unflattenedObject = unflatten(flattenedObject);
console.log(JSON.stringify(obj, null, 4));
console.log(flattenedObject);
console.log(JSON.stringify(unflattenedObject, null, 4));
```

## API

- [`flatten`](#flatten)
- [`unflatten`](#unflatten)

---

### `flatten(object)`

It takes JS object or JSON as an argument and returns flattened object.

- object (requied): The JS Object or JSON.

```js
    const flattenedObject = flatten(obj);
    console.log(flattenedObject);
```

---

### `unflatten(flattenedObject)`

It takes flattened object as an argument and returns unflattened object.

- flattenedObject (required): The normalized/flattened object.

```js
    const unflattenedObject = unflatten(flattenedObject);
    console.log(unflattenedObject);
```

---
