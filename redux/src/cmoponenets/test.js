import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add} from '../ducks/reducer';

class Test extends Component {
    render() {
        return (
            <div>


           <font size="15">
            {this.props.reducerNumState}
            </font>

            <button onClick={this.props.reducerAddMethod}>
            <font size="15">
            add
            </font>
            </button>
 
            </div>
        );
    }
}


// map all states from the reducer to props
const mapStateToProps = state => {
    return {
        reducerNumState: state.num
    }
}

// map all methods from reducer to props
const mapMethodsToProps = {
    reducerAddMethod: add
}

//Connect reducer State and Methods to the test component
export default connect(mapStateToProps, mapMethodsToProps)(Test);