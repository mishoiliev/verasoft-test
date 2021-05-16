import React from 'react';
import { connect } from 'react-redux';
import './orders.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class ErrorPage extends React.Component {
    render() {

        return (
            <div className='error-screen'>
                <Loader
                    className='error-loader'
                    type='ThreeDots'
                    color='#D2D2D2'
                    height='51px'
                    width='51px'
                />
            </div>
        )
    }
}

export default ErrorPage;