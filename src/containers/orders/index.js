import React from 'react';
import { SET_HEADER_DATA, SET_ORDER_DATA } from '../../constants';
import { connect } from 'react-redux';

class Orders extends React.Component {

    componentDidMount = () => {
        fetch("https://evoteam-verasoft.github.io/data/orders.json")
            .then(response => response.json())
            .then(json => {
                console.log("COMPONENT ORDERS MOUNT");
                console.log(json);
                this.props.setOrderData(json);
            })
    }

    render() {
        const {
            orders
        } = this.props

        console.log('AYOOOO');
        console.log(orders.orders_AAA);
        return (
            <h1>Order: {orders.orders_AAA.sent ? orders.orders_AAA.sent[0].type : ''}</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOrderData: (data) => { dispatch({ type: SET_ORDER_DATA, payload: data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);