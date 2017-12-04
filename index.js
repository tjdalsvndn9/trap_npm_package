   const map$ = (fn,array) => {
    return array.reduce((acc,val) => {
      const newValue = fn(val);
      acc.push(newValue);
      return acc;
    }, []);
  }



   const filter$ = (predicate,array) => {
    return array.reduce((acc,val) => {
      if(predicate(val)) acc.push(val);
      return acc;
    },[])
  }

  const mapAndFilter$ = (fn, predicate, array) => {
    return array.reduce((acc,val) => {
      let newValue = fn(val);
      if(predicate(newValue)){
        acc.push(newValue)
      };
      return acc;
    },[])
  }

  const filterAndMap$ = (predicate, fn, array) => {
    return array.reduce((acc,val) => {
      if(predicate(val)){
        let newValue = fn(val);
        acc.push(newValue);
      }
      return acc;
    }, [])
  }


  const findFirst$ = (input, array) => {
    return array.reduce((acc,val,index) => {
      if(val === input && acc.length<=0) acc.push({
        index,
        val
      })
      return acc;
    }, [])
  }

  const findLast$ = (input,array) => {
    let newArray =  array.reduce((acc,val,index) => {
      if(val === input){
        acc.push({
          index,
          val
        })
      }
      return acc;
    },[])
    return [newArray.pop()]
  }

  const findAll$ = (input,array) => {
    return array.reduce((acc,val,index) => {
      if(val === input){
        acc.push({
          index,
          val
        })
      }
      return acc;
    },[])
  }

  const max$ = (array,key) => {
    return array.reduce((acc,val) => {
      if(acc.length === 0 ){
          acc.push(val)
      }
      else if(val[key] > acc[0][key]){
        acc.shift();
        acc.push(val);
      }
      return acc;
    },[])
  }

  const min$ = (array,key) => {
    return array.reduce((acc,val) => {
      if(acc.length ===0 ) acc.push(val)
      else if(acc.length >0 && acc[0][key] > val[key]){
        acc.shift();
        acc.push(val);
      }
      return acc;
    },[])
  }

  const pluck$ = (array,key) => {
    return array.reduce((acc,val,index) => {
      acc.push({
        index,
        val:val[key]
      })
      return acc;
    },[])
  }

  const sortBy$ = (array,key,text = 'top') => {
    if(text === 'top'){
      return array.slice().sort((a,b) => b[key] - a[key])
    }
    else if(text === 'bottom'){
      return array.slice().sort((a,b) => a[key] - b[key])
    }
  }

  //things you can do with new Map()
  //new Map().size
  //new Map().delete() new Map().clear()
  //new Map().forEach((value,key))
  const indexBy$ =  (array,key) => {
    return array.reduce((acc,val,index) => {
        const newKey = val[key].toString();
        acc.set(newKey,val);
        return acc
  },new Map())
  }

  const shuffle$ = arr => {
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
  }

  const pure$ = array => {
    return array.reduce((acc,val) => {
      const regexp = /^[a-z0-9]+$/i;
      const stringfiedVal = val.toString()
      if(stringfiedVal.match(regexp) && typeof val !== 'boolean') acc.push(val)
      return acc;
    },[])
  };

const compact$ = array => {
  let set = new Set(array)
  return [...set];
};

const intersection$ = (array1,array2)  =>  {
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  let result = [...set1].filter(x => set2.has(x))
  return [...result]
}

const difference$ = (array1, array2) => {
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  let result = [...set1].filter(x => !set2.has(x))
  return [...result]
}

const deepInteraction$ = (array1,array2,key) => {
  return array1.reduce((acc,val) => {
    array2.forEach(val2 => {
      if(val[key] === val2[key]) acc.push(val2)
    })
      return acc;
  },[])
}

const deepDifference$ = (array1,array2,key) => {
  return array1.reduce((acc,val1) => {
    let newAcc = array2.reduce((acc,val2) => {
      if(val1[key] !== val2[key]) acc.push(val2)
      return acc;
    },[])
    acc = newAcc;
    return acc;
  },[])
}

const mean$ = (array) => {
  return array.reduce((acc,val,index,arr) => {
    if(index === arr.length -1){
      let newAcc = acc + val;
      return newAcc / arr.length
    }
    return acc + val;
  },0)
}


const naiveFlatten$ = (array) => {
  return array.reduce((acc,val) => {
    return acc.concat(val);
  },[])
};

const deepFlatten$ = (array,key) => {
  return array.reduce((acc,val) => {
    val[key].forEach(value => {
      if(acc.indexOf(value) === -1){
        acc.push(value)
      }
    })
    return acc;
  },[])
}

const compose$ = (array,accumulator) => {
  return array.reduce((acc,fn) => {
    return fn(acc)
  },accumulator)
}



  module.exports ={
    map$,
    filter$,
    pure$,
    shuffle$,
    indexBy$,
    sortBy$,
    pluck$,
    min$,
    max$,
    findAll$,
    findLast$,
    findFirst$,
    filterAndMap$,
    mapAndFilter$,
    compact$,
    intersection$,
    difference$,
    deepInteraction$,
    deepDifference$,
    mean$,
    naiveFlatten$,
     deepFlatten$,
     compose$
  }
