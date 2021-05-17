import React from 'react';
import { connect } from 'react-redux';
import './orders.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { changeLoading } from '../../actions';

class ErrorPage extends React.Component {

    componentDidMount() {
        //setting the loader to true everytime we render the errors component
        this.props.changeLoading(true);
    }

    render() {

        return (
            <div className='error-screen'>
                {
                    this.props.loading
                        ? <Loader
                            className='error-loader'
                            type='ThreeDots'
                            color='#D2D2D2'
                            height='51px'
                            width='51px'
                        />
                        : <div className='no-items'>No Items</div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        loading: state.orders.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoading: (bool) => dispatch(changeLoading(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);