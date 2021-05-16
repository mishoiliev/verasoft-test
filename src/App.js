import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setHeaderData } from './actions';
import { SET_FIRST_NAME, SET_HEADER_DATA } from './constants';
import Header from './containers/header'
import Orders from './containers/orders'

class App extends React.Component {

  render() {

    return (
      <div className="App" style={{ padding: '1vw' }}>
        <Header />
        <Orders />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     header: state.header,
//     orders: state.orders,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setHeaderData: (data) => { dispatch({ type: SET_HEADER_DATA, payload: data }) }
//   }
// }

export default App;