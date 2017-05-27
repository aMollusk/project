
export default echo = (term, arg) => {
  // term.log({msg: arg, color: 'success'})
  term.logArray([
    {msg: 'kieran', color: 'success', delay: 500},
    {msg: 'is', color: 'error', delay: 500},
    {msg: 'amazing', color: 'success', delay: 500},
    {msg: 'did', color: 'error', delay: 500},
    {msg: 'you', color: 'success', delay: 500},
    {msg: 'know', color: 'error', delay: 500},
  ])
}

