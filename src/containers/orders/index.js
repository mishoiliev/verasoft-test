import React from 'react';
import { connect } from 'react-redux';
import './orders.css';
import { sagaSetOrdersData, setOrdersData, setSelectedOrder } from '../../actions';
import SentOrders from './sent_orders';
import ErrorPage from './errors';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSentErrorButton: 'Sent',
            sentSelected: true,
        };
    }

    componentDidMount = () => {
        console.log('setting orders data');
        this.props.sagaSetOrdersData();
    }

    openSelectedOrder(orderName) {
        this.props.setSelectedOrder(orderName);
    }

    selectSentErrorButton(button) {
        this.setState({
            selectedSentErrorButton: button,
            sentSelected: true,
        });
        if (button == 'ERRORS') this.setState({ sentSelected: false });
    }

    render() {
        const {
            orders
        } = this.props
        console.log('orders', orders);

        const ordersObj = orders.orders;
        const selectedOrder = orders.selectedOrder;

        return (
            <div className='orders-wrapper'>
                <div className='orders-selector'>
                    <div className='orders-select-wrapper'>
                        {Object.keys(ordersObj).map(key => {
                            return (
                                <button
                                    id={key}
                                    className={key === selectedOrder ? 'selected orders-select-button' : 'orders-select-button'}
                                    onClick={(e) => {
                                        this.openSelectedOrder(key);
                                    }}
                                >
                                    {key.toUpperCase()}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className='orders-toolbar'>
                    <div className='sent-errors-buttons'>
                        <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                            <input
                                type='Submit'
                                value="SENT"
                                className={this.state.sentSelected ? 'selected sent-errors' : 'sent-errors'}
                                onClick={(e) => this.selectSentErrorButton(e.target.value)}
                            />
                            <input
                                type='Submit'
                                value='ERRORS'
                                className={!this.state.sentSelected ? 'selected sent-errors' : 'sent-errors'}
                                onClick={(e) => this.selectSentErrorButton(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='recent-orders'>
                        RECENT ORDERS
                    </div>
                </div>
                <div className='selected-orders'>
                    {
                        this.state.sentSelected
                            ?
                            <SentOrders />
                            : <ErrorPage />
                    }
                </div>

            </div >
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
        sagaSetOrdersData: (data) => dispatch(sagaSetOrdersData(data)),
        setSelectedOrder: (order) => dispatch(setSelectedOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);