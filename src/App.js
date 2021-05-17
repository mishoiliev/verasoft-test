import React from 'react';
import Overlay from "react-overlay-component";
import LoadingOverlay from 'react-loading-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setHeaderData } from './actions';
import { SET_FIRST_NAME, SET_HEADER_DATA } from './constants';
import Header from './containers/header'
import Orders from './containers/orders'
import { IconButton } from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/ai';
import './app.css'

class App extends React.Component {

  render() {
    let show = false

    return (
      <div className="App" style={{ padding: '1vw' }}>
        {/* <Overlay
          isOpen={true}
          configs={{
            animate: true,
            clickDismiss: true,
            escapeDismiss: false,
            focusOutline: true,
          }}
          closeOverlay={() => console.log('close')}
        // onClose={() => console.log('closed')}
        > */}

        {
          show
            ? <div className='overlay'>
              <button
                className='overlay-close'
              >
                <AiOutlineClose
                  color='#333'
                  size='50px'
                />
              </button>
            </div>
            : ''

        }
        <Header className='header' />
        <Orders className='orders' />

        {/* </Overlay> */}
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