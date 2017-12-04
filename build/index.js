'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map$ = function map$(fn, array) {
  return array.reduce(function (acc, val) {
    var newValue = fn(val);
    acc.push(newValue);
    return acc;
  }, []);
};

var filter$ = function filter$(predicate, array) {
  return array.reduce(function (acc, val) {
    if (predicate(val)) acc.push(val);
    return acc;
  }, []);
};

var mapAndFilter$ = function mapAndFilter$(fn, predicate, array) {
  return array.reduce(function (acc, val) {
    var newValue = fn(val);
    if (predicate(newValue)) {
      acc.push(newValue);
    };
    return acc;
  }, []);
};

var filterAndMap$ = function filterAndMap$(predicate, fn, array) {
  return array.reduce(function (acc, val) {
    if (predicate(val)) {
      var newValue = fn(val);
      acc.push(newValue);
    }
    return acc;
  }, []);
};

var findFirst$ = function findFirst$(input, array) {
  return array.reduce(function (acc, val, index) {
    if (val === input && acc.length <= 0) acc.push({
      index: index,
      val: val
    });
    return acc;
  }, []);
};

var findLast$ = function findLast$(input, array) {
  var newArray = array.reduce(function (acc, val, index) {
    if (val === input) {
      acc.push({
        index: index,
        val: val
      });
    }
    return acc;
  }, []);
  return [newArray.pop()];
};

var findAll$ = function findAll$(input, array) {
  return array.reduce(function (acc, val, index) {
    if (val === input) {
      acc.push({
        index: index,
        val: val
      });
    }
    return acc;
  }, []);
};

var max$ = function max$(array, key) {
  return array.reduce(function (acc, val) {
    if (acc.length === 0) {
      acc.push(val);
    } else if (val[key] > acc[0][key]) {
      acc.shift();
      acc.push(val);
    }
    return acc;
  }, []);
};

var min$ = function min$(array, key) {
  return array.reduce(function (acc, val) {
    if (acc.length === 0) acc.push(val);else if (acc.length > 0 && acc[0][key] > val[key]) {
      acc.shift();
      acc.push(val);
    }
    return acc;
  }, []);
};

var pluck$ = function pluck$(array, key) {
  return array.reduce(function (acc, val, index) {
    acc.push({
      index: index,
      val: val[key]
    });
    return acc;
  }, []);
};

var sortBy$ = function sortBy$(array, key) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';

  if (text === 'top') {
    return array.slice().sort(function (a, b) {
      return b[key] - a[key];
    });
  } else if (text === 'bottom') {
    return array.slice().sort(function (a, b) {
      return a[key] - b[key];
    });
  }
};

//things you can do with new Map()
//new Map().size
//new Map().delete() new Map().clear()
//new Map().forEach((value,key))
var indexBy$ = function indexBy$(array, key) {
  return array.reduce(function (acc, val, index) {
    var newKey = val[key].toString();
    acc.set(newKey, val);
    return acc;
  }, new Map());
};

var shuffle$ = function shuffle$(arr) {
  var rand;
  var tmp;
  var len = arr.length;
  var ret = arr.slice();

  while (len) {
    rand = Math.floor(Math.random() * len--);
    tmp = ret[len];
    ret[len] = ret[rand];
    ret[rand] = tmp;
  }

  return ret;
};

var pure$ = function pure$(array) {
  return array.reduce(function (acc, val) {
    var regexp = /^[a-z0-9]+$/i;
    var stringfiedVal = val.toString();
    if (stringfiedVal.match(regexp) && typeof val !== 'boolean') acc.push(val);
    return acc;
  }, []);
};

var compact$ = function compact$(array) {
  var set = new Set(array);
  return [].concat(_toConsumableArray(set));
};

var intersection$ = function intersection$(array1, array2) {
  var set1 = new Set(array1);
  var set2 = new Set(array2);
  var result = [].concat(_toConsumableArray(set1)).filter(function (x) {
    return set2.has(x);
  });
  return [].concat(_toConsumableArray(result));
};

var difference$ = function difference$(array1, array2) {
  var set1 = new Set(array1);
  var set2 = new Set(array2);
  var result = [].concat(_toConsumableArray(set1)).filter(function (x) {
    return !set2.has(x);
  });
  return [].concat(_toConsumableArray(result));
};

var deepInteraction$ = function deepInteraction$(array1, array2, key) {
  return array1.reduce(function (acc, val) {
    array2.forEach(function (val2) {
      if (val[key] === val2[key]) acc.push(val2);
    });
    return acc;
  }, []);
};

var deepDifference$ = function deepDifference$(array1, array2, key) {
  return array1.reduce(function (acc, val1) {
    var newAcc = array2.reduce(function (acc, val2) {
      if (val1[key] !== val2[key]) acc.push(val2);
      return acc;
    }, []);
    acc = newAcc;
    return acc;
  }, []);
};

var mean$ = function mean$(array) {
  return array.reduce(function (acc, val, index, arr) {
    if (index === arr.length - 1) {
      var newAcc = acc + val;
      return newAcc / arr.length;
    }
    return acc + val;
  }, 0);
};

var naiveFlatten$ = function naiveFlatten$(array) {
  return array.reduce(function (acc, val) {
    return acc.concat(val);
  }, []);
};

var deepFlatten$ = function deepFlatten$(array, key) {
  return array.reduce(function (acc, val) {
    val[key].forEach(function (value) {
      if (acc.indexOf(value) === -1) {
        acc.push(value);
      }
    });
    return acc;
  }, []);
};

var compose$ = function compose$(array, accumulator) {
  return array.reduce(function (acc, fn) {
    return fn(acc);
  }, accumulator);
};

module.exports = {
  map$: map$,
  filter$: filter$,
  pure$: pure$,
  shuffle$: shuffle$,
  indexBy$: indexBy$,
  sortBy$: sortBy$,
  pluck$: pluck$,
  min$: min$,
  max$: max$,
  findAll$: findAll$,
  findLast$: findLast$,
  findFirst$: findFirst$,
  filterAndMap$: filterAndMap$,
  mapAndFilter$: mapAndFilter$,
  compact$: compact$,
  intersection$: intersection$,
  difference$: difference$,
  deepInteraction$: deepInteraction$,
  deepDifference$: deepDifference$,
  mean$: mean$,
  naiveFlatten$: naiveFlatten$,
  deepFlatten$: deepFlatten$,
  compose$: compose$
};