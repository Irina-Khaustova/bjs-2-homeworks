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
    if (flag === false && !timeout) {
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

function debounceDecorator2(func) {

  let flag = false;
  let timeout;
  wrapper.count = 0;

  function wrapper (...args) { 
    
    clearTimeout(timeout);
    if (flag === false && !timeout) {
      func.apply(this, args);
      flag = true;
    } else { 
      clearTimeout(timeout);        
      timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
      },ms);
    };
     
    wrapper.count += 1;
  };

  return wrapper;
  console.log(wrapper.count)
};
