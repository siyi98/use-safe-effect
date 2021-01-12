# use-safe-effect 

[![npm version](https://badge.fury.io/js/use-safe-effect.svg)](https://www.npmjs.com/package/use-safe-effect)

[![license](https://badgen.net/npm/license/use-async-effect)](./LICENSE)

---


:running: Throw away the `Promise`，Choose `Async/Await`

## Installation
```shell
npm install use-safe-effect --save
```

## Examples
```javascript
import useSafeEffect from 'use-safe-effect'

useSafeEffect(async () => console.log('componentDidMount'), () => console.log('componentWillUnMount'), [])
```

```javascript
import useSafeEffect from 'use-safe-effect'
import request from 'umi-request'

useSafeEffect(
  async () => {
    let res = await request(api)
    console.log('componentDidMount')
  },
  () => {
    console.log('componentWillUnMount')
  },
  []
)
```
