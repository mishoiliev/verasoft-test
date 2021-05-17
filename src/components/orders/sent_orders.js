import React from 'react';
import { connect } from 'react-redux';
import './orders.css';

class SentOrders extends React.Component {

    getHours(time) {
        if (time) {
            let hours = time.toString().substr(0, 2);
            let amOrPm = Number(hours) < 12 ? 'am' : 'pm';
            return time.toString().substr(0, 5) + amOrPm;
        }
        return '-';
    }

    getDate(date) {
        if (date) {
            let newDate = new Date(date).toString();
            return `${newDate.substr(0, 3)}, ${newDate.substr(4, 3)} ${newDate.substr(13, 2)}`
        }
        return '-';
    }

    render() {
        const {
            orders,
            selectedOrder,
        } = this.props

        // console.log(Object.keys(orders).map(key => key == selectedOrder));
        console.log(orders[selectedOrder]);
        return (
            <div>
                {
                    orders[selectedOrder].length != 0 || orders[selectedOrder].sent
                        ? <div className='orders-header'>
                            <div className='date-n-time'>DATE & TIME</div>
                            <div className='subject'>SUBJECT</div>
                            <div className='communication-type'>COMMUNICATION TYPE</div>
                            <div className='order-id'>ORDER #</div>
                        </div>
                        : ''
                }
                {
                    orders[selectedOrder].length != 0 || orders[selectedOrder].sent
                        ? orders[selectedOrder].sent.map((obj, index) => {
                            return (
                                <div
                                    className='order-wrapper'
                                    style={
                                        index % 2 == 1
                                            ? { background: '#F2F4F7 0% 0% no-repeat padding-box', opacity: '1' }
                                            : { background: '' }
                                    }
                                >
                                    <div className='date-n-time'>
                                        {this.getDate(obj.sent_dt)}<br />
                                        {this.getHours(obj.sent_tm)}
                                    </div>
                                    <div className='subject'>
                                        {obj.subject.title}<br />
                                        {obj.subject.email}
                                    </div>
                                    <div className='communication-type'>
                                        {obj.type}
                                    </div>
                                    <div className='order-id'>
                                        {obj.order_id}
                                    </div>
                                    <div>
                                        <button id='resend-button' onClick={() => alert('RESEND order')}>RESEND</button>
                                    </div>
                                </div>
                            )
                        })
                        : <div className='no-items'>No items</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        selectedOrder: state.orders.selectedOrder,
    }
}

export default connect(mapStateToProps)(SentOrders);