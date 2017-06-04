
export default (term) => {
  term.logArray([
    {msg: `Hey is looks like you've called for help`, color: 'success', delay: 100},
    {msg: `Ya dork`, color: 'error', delay: 100},
    {msg: `You're not very smart hey?`, color: 'success', delay: 100},
    {msg: `We'll sort you out`, color: 'error', delay: 100},
  ])
}