import React from 'react'
import { connect } from 'react-redux'

import Window from './Window'
import Editor from './windows/Editor'


const App = () => {
    return (
        <div className="containersss">
            <h1>This is the app rot</h1>
            <p>Hello, my name is kieran</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(App)