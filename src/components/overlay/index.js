import React from 'react';
import { connect } from 'react-redux';
import { setOverlayVisible } from '../../actions';
import { AiOutlineClose } from 'react-icons/ai';
import './overlay.css';
import Loader from "react-loader-spinner";

class Overlay extends React.Component {
    render() {
        const {
            overlay
        } = this.props;

        console.log(overlay);
        return (
            <div className='overlay'>
                <button
                    className='overlay-close'
                    onClick={() => this.props.setOverlayVisible(false)}
                >
                    <AiOutlineClose
                        color='white'
                        size='35px'
                    />
                </button>
                <div className='overlay-loader-wrapper'>
                    <Loader
                        className='overlay-loader'
                        type='TailSpin'
                        color='#D2D2D2'
                        height='7%'
                        width='7%'
                    />
                    <div id='processing'>Processing</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        overlay: state.overlay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOverlayVisible: (bool) => dispatch(setOverlayVisible(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);