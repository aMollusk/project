import React from 'react';
import { connect } from 'react-redux';
import { command } from '../../actions/terminal'

const keyDown = function(e) {
  if(e.code === 'ArrowUp'){
    const validHistory = this.props.logs.filter(({msg, owner})=>{
      return msg !== '' && owner == 'user'
    })
    if(this.state.historyStep <= validHistory.length){
      const historyCmd = validHistory[validHistory.length - this.state.historyStep].msg
      this.setState({
        input: historyCmd,
        historyStep: this.state.historyStep + 1 
      })
    } else {
      const historyCmd = validHistory[validHistory.length - 1].msg
      this.setState({
        input: historyCmd,
        historyStep: 1
      })
    }
  }
}

class Terminal extends React.Component {
  constructor(props){
    super(props);
    this.keyDown = keyDown.bind(this)
    this.state = {
      input: '',
      historyStep: 1
    }
  }

  componentDidMount = () => {
    this.input.focus();

    document.addEventListener('keydown', this.keyDown)
  }

  componentDidUpdate = (prevState, prevProps) => {
    console.log(this.props.processing)
    if(this.props.processing === false){
      this.input.focus()
    }
  } 

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
      historyStep: 1
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      input: '',
    });
    this.props.dispatch(command({msg: this.state.input, owner: 'user'}))
  }

  render(){
    return (
      <div className="terminal" onClick={()=>{this.input.focus()}}>
        {this.props.logs.map((log, index)=>{
          const { msg } = log
          return (
            <div 
              className={`terminal-log ${log.owner === 'user' ? 'userLog' : ''} ${log.color}`} 
              key={`log-${index}`}
            >
              {msg}
            </div>
          )
        })}
        <form className={`prompt ${this.props.processing ? 'loading' : ''}`}>
          <input 
            disabled={this.props.processing}
            ref={(me)=>{this.input = me}}
            value={this.state.input} 
            onChange={this.inputChange}
          />
          <button onClick={this.submitForm}>Submit</button>
          {this.props.processing && (
            <div>
              <h1>loading</h1>
            </div>
          )}
        </form>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
   logs: state.terminal.logs,
   processing: state.terminal.processing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
