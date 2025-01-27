function cachingDecoratorNew(func) {

  let cache = [];

  function wrapper(...args) {
  	
    hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash == hash);
    if (idx !== -1) {
      console.log('Из кэша: ' + cache[idx].value);
      return 'Из кэша: ' + cache[idx].value;
    };
    let result = func(...args);
    cache.push({hash, value:result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result;
  };  

  return wrapper;
};  
  

function debounceDecoratorNew(func) {

  let flag = false;
  let timeout;
  
  return function (...args) { 

    clearTimeout(timeout);
    if (flag === false) {
      func.apply(this, args);
      console.log(args)
      flag = true;
    } else { 
      clearTimeout(timeout);        
      timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
      },ms);
    };
  };
};

function debounceDecorator2(func, ms) {
  let flag = false;
  let timeout;
  wrapper.count = 0;

  function wrapper (...args) { 
    
    clearTimeout(timeout);
    if (flag === false) {
      func.apply(this, args);
      flag = true;
      wrapper.count += 1;
    } else { 
      clearTimeout(timeout);        
      timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
        wrapper.count += 1;
      }         
      ,ms);
    };
     //wrapper.count += 1;
      console.log(wrapper.count)
    }
    return wrapper;
    console.log(wrapper.count);
  }
//console.log(upgradedSendSignal.count);