## Setup
```js
$ npm install trap_util --save
```
```js
Node js

const Trap = require('trap_util');
const {map$} = require('trap_util');

React/Vue/Angular5

import Trap from 'trap_util';
import {map$} from 'trap_util';
```

```js
map$
console.log(Trap.map$(x => x +5, [1,2,3,4,5]))
// [ 6, 7, 8, 9, 10 ]
```

```js
filter$
console.log(Trap.filter$(x=> x < 3, [1,2,3,4,5]))
//[1,2]
```

```js
mapAndFilter$
console.log(Trap.mapAndFilter$(x => x * 3, x => x  <  5, [1,2,3,4,5]))
//[3]
```
```js
filterAndMap$
console.log(Trap.filterAndMap$(x => x < 3, x => x* 5, [1,2,3,4,5,6,7]))
//[5,10]
```

```js
findFirst$
console.log(Trap.findFirst$(3,[1,2,3,3,3,3,4,5]))
//[ { index: 2, val: 3 } ]
```

```js
findLast$
console.log(Trap.findLast$(3,[1,2,3,3,3,3,4,5]))
//[ { index: 5, val: 3 } ]
```

```js
findAll$
console.log(Trap.findAll$(3,[1,2,3,3,3,3,4,5]))
// [
//  { index: 2, val: 3 },
//  { index: 3, val: 3 },
//  { index: 4, val: 3 },
//  { index: 5, val: 3 }
// ]
```

```js
max$
console.log(Trap.max$([
  {name:'sungmin yi', age:20},
  {name:'sungmin yi', age:30},
  {name:'sungmin yi',age:70},
  {name:'sungmin yi',age:80},
  {name:'sungmin yi',age:120},
  {name:'sungmin yi',age:40},
  {name:'sungmin yi',age:40}
],'age'));
// [ { name: 'sungmim yi', age: 120 } ]
```

```js
min$
console.log(Trap.min$([
  {name:'sungmin yi', age:20},
  {name:'sungmin yi', age:30},
  {name:'sungmin yi',age:70},
  {name:'sungmin yi',age:80},
  {name:'sungmin yi',age:120},
  {name:'sungmin yi',age:40},
  {name:'sungmin yi',age:40}
],'age'));
// [ { name: 'sungmim yi', age: 20 } ]
```

```js
pluck$
console.log(Trap.pluck$([
  {name:'sungmin yi', age:20},
  {name:'sungmin yi2', age:30},
  {name:'sungmin yi3',age:70},
  {name:'sungmin yi4',age:80},
  {name:'sungmin yi5',age:120},
  {name:'sungmin yi6',age:40},
  {name:'sungmin yi7',age:40}
],'name'));
// [
//  { index: 0, val: 'sungmin yi' },
//  { index: 1, val: 'sungmin yi1' },
//  { index: 2, val: 'sungmin yi2' },
//  { index: 3, val: 'sungmin yi3' },
//  { index: 4, val: 'sungmin yi4' },
//  { index: 5, val: 'sungmin yi5' },
//  { index: 6, val: 'sungmin yi6' }
// ]
```


```js
sortBy$
console.log(Trap.sortBy$([
  {name:'sungmin yi', age:20},
  {name:'sungmin yi2', age:30},
  {name:'sungmin yi3',age:70},
  {name:'sungmin yi4',age:80},
  {name:'sungmin yi5',age:120},
  {name:'sungmin yi6',age:40},
  {name:'sungmin yi7',age:40}
],'age'));
//[
//  { name: 'sungmin yi5', age: 120 },
//  { name: 'sungmin yi4', age: 80 },
//  { name: 'sungmin yi3', age: 70 },
//  { name: 'sungmin yi6', age: 40 },
//  { name: 'sungmin yi7', age: 40 },
//  { name: 'sungmin yi2', age: 30 },
//  { name: 'sungmin yi', age: 20 }
//]
```



```js
indexBy$
console.log(Trap.indexBy$([
  {name:'sungmin yi', age:20},
  {name:'sungmin yi2', age:30},
  {name:'sungmin yi3',age:70},
  {name:'sungmin yi4',age:80},
  {name:'sungmin yi5',age:120},
  {name:'sungmin yi6',age:40},
  {name:'sungmin yi7',age:40}
],'age'));
// Map {
//  '20' => { name: 'sungmin yi', age: 20 },
//  '30' => { name: 'sungmin yi2', age: 30 },
//  '70' => { name: 'sungmin yi3', age: 70 },
//  '80' => { name: 'sungmin yi4', age: 80 },
//  '120' => { name: 'sungmin yi5', age: 120 },
//  '40' => { name: 'sungmin yi7', age: 40 }
// }
```

```js
shuffle$
  console.log(Trap.shuffle$([1,2,3,4,5,6]))
// [ 3, 6, 1, 2, 5, 4 ]
```

```js
pure$
 console.log(Trap.pure$([0, 1, false, 2, '', 3,'A']))
// [ 0, 1, 2, 3, 'A' ]
```


```js
mean$
 console.log(Trap.mean$([1,2,3,4,5]))
// 3
```

```js
naiveFlatten$
console.log(Trap.naiveFlatten$([[1,2,3,4,5],[1,2,3],[3,4,5]]))
// [ 1, 2, 3, 4, 5, 1, 2, 3, 3, 4, 5 ]
```
