import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header'
import Orders from './components/orders'
import Overlay from './components/overlay'
import './app.css'

class App extends React.Component {

  render() {

    return (
      <div className="App" style={{ padding: '1vw' }}>
        {this.props.overlay ? <Overlay /> : ''}
        <div
          className='main-page'
          style={this.props.overlay ? { filter: 'blur(10px)' } : { filter: '' }}
        >
          <Header className='header' />
          <Orders className='orders' />
        </div>

        {/* </Overlay> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    overlay: state.overlay,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setHeaderData: (data) => { dispatch({ type: SET_HEADER_DATA, payload: data }) }
//   }
// }

export default connect(mapStateToProps)(App);