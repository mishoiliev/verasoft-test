import React from 'react';
import { SET_HEADER_DATA } from '../../constants';
import { connect } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import './header.css';

class Header extends React.Component {

    componentDidMount = () => {
        fetch("https://evoteam-verasoft.github.io/data/summary.json")
            .then(response => response.json())
            .then(json => {
                console.log("COMPONENT DID MOUNT");
                this.props.setHeaderData(json);
            })
    }

    render() {
        const {
            header
        } = this.props
        return (
            <div className='header-wrapper'>
                <div className='upperHeader'>
                    <AiOutlineStar className='star-icon' />
                    <span className='username'>{header.first_name} {header.last_name}</span>
                    <button
                        className='new-order-button'
                        onClick={() => alert('Adds new order')}
                    >
                        <span>New Order</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        header: state.header,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeaderData: (data) => { dispatch({ type: SET_HEADER_DATA, payload: data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);