
export default echo = function(term){
  const argArr = Array.from(arguments);
  const args = argArr.splice(1, argArr.length - 1)

  term.log({msg: args.join(' '), color: 'success'})
}
