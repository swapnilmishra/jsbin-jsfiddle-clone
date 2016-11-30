let debounce = (originalFunction,timeout) => {
  let debounced = false;
  return( function() {
   let args = arguments;
    if(!debounced){
      debounced = true;
      setTimeout( () => {
        originalFunction.apply(undefined,args)
        debounced = false;
      },timeout)
    }
  });
}


module.exports = {
    debounce
}