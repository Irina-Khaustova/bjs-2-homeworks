function cachingDecoratorNew(func) {
 let cache = [];
  function wrapper(...args) {
  	hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash == hash)
  	if (idx !== -1) {
      console.log('Из кэша: ' + cache[idx].value);
      return 'Из кэша: ' + cache[idx].value;
  	}
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
      flag = true;
    }         
    timeout = setTimeout(() => {
      flag = false;             
    }, ms);
  };
}

function debounceDecorator2(func) {
  let flag = false;
  let timeout;
  let i = 0;

  return function wrapper (...args) {
    wrapper['count'];  
    clearTimeout(timeout); 
    if (flag === false) {
      func.apply(this, args);
      flag = true;
      i = i + 1;
      wrapper['count'] = i;
      console.log(wrapper['count'], i);
    }         
      timeout = setTimeout(() => {
      flag = false;             
       }, 
      ms);
  };
  return wrapper;
}
