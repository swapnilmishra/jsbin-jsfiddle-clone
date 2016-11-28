let debounce = function(func,timeout){
  let debounced = false;
  return function(){
   let args = arguments;
    if(!debounced){
      debounced = true;
      setTimeout(function(){
        func.apply(undefined,args)
        debounced = false;
      },timeout)
    }
  }

}


module.exports = {
    debounce
}